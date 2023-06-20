
# use-google-places-autocomplete

A custom React hook for integrating Google Places Autocomplete into your application.

## Installation

Install the package using npm:

```shell
npm install use-google-places-autocomplete
```
OR

Install the package using yarn:

```shell
yarn add use-google-places-autocomplete
```

## Usage
```shell
import useGooglePlacesAutocomplete from 'use-google-places-autocomplete';

const options = {
  // Autocomplete options
};

const apiKey = 'YOUR-GOOGLE-MAPS-API-KEY';

const YourComponent = () => {
  const { autoCompleteRef, inputRef, place } = useGooglePlacesAutocomplete(apiKey, options);

  // Use the autoCompleteRef, inputRef, and place values in your component

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};
```

## API

### `useGooglePlacesAutocomplete(apiKey, options)`

The `useGooglePlacesAutocomplete` hook accepts two parameters:

- `options` (object): Options for the Autocomplete instance.
- `apiKey` (string): Google Maps API key.

The hook returns an object containing the following properties:

- `autoCompleteRef` (object): A ref that can be attached to the input element to enable Autocomplete functionality.
- `inputRef` (object): A ref that references the input element.
- `place` (object): The selected place object returned by the Autocomplete service.

## License

This script is licensed under the MIT License.
 
