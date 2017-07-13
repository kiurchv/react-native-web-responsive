import { createElement } from "react";
import WebMediaQuery from "react-responsive";

export default function MediaQuery({
  devicePixelRatio: resolution,
  minDevicePixelRatio: minResolution,
  maxDevicePixelRatio: maxResolution,
  ...props
}) {
  return createElement(WebMediaQuery, {
    resolution,
    minResolution,
    maxResolution,
    ...props
  });
}
