import { html } from "lit";

import "../src/tokens/build/_border.css";
import "../src/tokens/build/_colors.css";
import "../src/tokens/build/_rest.css";
import "../src/tokens/build/_shadow.css";
import "../src/tokens/build/_spacing.css";
import "../src/tokens/build/_sizing.css";
import "../src/tokens/build/_typography.css";

import { setCustomElementsManifest } from "@storybook/web-components";

import customElementsManifest from "./public/custom-elements.json";

setCustomElementsManifest(customElementsManifest);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
    exclude: /^data-/i,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};