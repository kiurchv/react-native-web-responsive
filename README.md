# react-native-web-responsive

Universal media queries for React Native and web.

## Installation

Using npm:

```sh
npm install --save react-native-web-responsive
```

or yarn:

```sh
yarn add react-native-web-responsive
```

## Usage

Since MediaQuery component built on components from [react-responsive](https://github.com/contra/react-responsive) and [react-native-responsive](https://github.com/adbayb/react-native-responsive) it can utilize any props supported by them with next limitations:
1. There is no difference between viewport- and device-based measurements on native.
2. The only supported unit for the resolution property is dppx.
3. Child function, properties `aspectRatio`, `component`, `color`, `colorIndex`, `monochrome`, `scan` and `type` are unsupported on native.

### Example

```jsx
import React from "react";
import { View, Text } from "react-primitives";
import MediaQuery from "react-native-web-responsive";

function ResponsiveExample() {
  return (
    <View>
      <Text>Device Test!</Text>
      <MediaQuery minWidth={1224}>
        <Text>You are a desktop or laptop</Text>
        <MediaQuery minWidth={1824}>
          <Text>You also have a huge screen</Text>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <Text>You are a tablet or mobile phone</Text>
      </MediaQuery>
      <MediaQuery orientation="portrait">
        <Text>You are portrait</Text>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <Text>You are landscape</Text>
      </MediaQuery>
      <MediaQuery minPixelRatio={2}>
        <Text>You are retina</Text>
      </MediaQuery>
    </View>
  );
}
```

## License

[MIT](https://github.com/kiurchv/react-native-web-responsive/blob/master/LICENSE)
