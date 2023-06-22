import { useRef, useEffect, useState } from 'react';

/**
 * A custom React hook for integrating Google Places Autocomplete into your application.
 * @param {string} apiKey - Google Maps API key.
 * @param {Object} options - Options for the Autocomplete instance.
 * @returns {Object} - Returns an object containing references and state for the Autocomplete functionality.
 */
const useGooglePlacesAutocomplete = (apiKey, options) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    // Check if Google Maps script is already added
    const isMapsScriptAdded = Array.from(document.getElementsByTagName('script')).some(
      (script) =>
        script.src.includes('maps.googleapis.com/maps/api/js') &&
        script.src.includes(`key=${apiKey}`)
    );

    if (!isMapsScriptAdded) {
      // Add Google Maps script dynamically
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initAutocomplete);
      document.head.appendChild(script);
    } else {
      initAutocomplete();
    }

    window.initMap = initAutocomplete; // Add this line

    function initAutocomplete() {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      autoCompleteRef.current.addListener('place_changed', async function () {
        const selectedPlace = await autoCompleteRef.current.getPlace();
        setPlace(selectedPlace);
      });
    }

    return () => {
      if (autoCompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autoCompleteRef.current);
      }
    };
  }, [options, apiKey]);

  return { autoCompleteRef, inputRef, place };
};

export default useGooglePlacesAutocomplete;
