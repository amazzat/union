import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    fonts: {
      Inter: '"Inter", sans-serif',
    },
  },
  media: {},
  utils: {},
});

export const globalStyles = globalCss(...normalize, {
  body: {
    fontFamily: "$Inter",
  },
});
