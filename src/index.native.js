import { createElement } from "react";
import { MediaQuery as NativeMediaQuery } from "react-native-responsive";

export default function MediaQuery({
  height: deviceHeight,
  minHeight: minDeviceHeight,
  maxHeight: maxDeviceHeight,
  width: deviceWidth,
  minWidth: minDeviceWidth,
  maxWidth: maxDeviceWidth,
  resolution: devicePixelRatio,
  minResolution: minDevicePixelRatio,
  maxResolution: maxDevicePixelRatio,
  ...props
}) {
  [devicePixelRatio, minDevicePixelRatio, maxDevicePixelRatio] = [
    devicePixelRatio,
    minDevicePixelRatio,
    maxDevicePixelRatio
  ].map(prop => (typeof prop === "string" ? parseInt(prop, 10) : prop));

  return createElement(NativeMediaQuery, {
    deviceHeight,
    minDeviceHeight,
    maxDeviceHeight,
    deviceWidth,
    minDeviceWidth,
    maxDeviceWidth,
    devicePixelRatio,
    minDevicePixelRatio,
    maxDevicePixelRatio,
    ...props
  });
}
