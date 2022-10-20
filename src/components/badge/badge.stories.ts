import { Story } from "@storybook/web-components";
import { html } from "lit-html";
import type { AoBadge } from "./badge";
import "./badge";

export default {
  title: "Components/Badge",
  component: "ao-badge",
  argTypes: {
    ariaLabel: {
      name: "aria-label",
      type: "string",
    },
    color: {
      type: "string",
      options: ["blue-600", "blue-500"],
      defaultValue: "blue-500",
      control: {
        type: "radio",
      },
    },
  },
};

const BadgeDefault: Story<AoBadge> = ({ innerText, ariaLabel }) =>
  html` <ao-badge aria-label="${ariaLabel}">${innerText}</ao-badge>`;

export const Badge = BadgeDefault.bind({});
Badge.args = {
  innerText: "5",
  ariaLabel: "accessible label",
};

const SelectedBadge: Story<AoBadge> = ({
  innerText,
  ariaLabel,
}) => html` <ao-badge selected aria-label="${ariaLabel}"
  >${innerText}</ao-badge
>`;

export const BadgeWithAttributeSelected = SelectedBadge.bind({});
BadgeWithAttributeSelected.args = {
  innerText: "5",
  ariaLabel: "accessible label",
};

const BadgeColors: Story<AoBadge> = ({
  color,
  innerText,
  ariaLabel,
}: AoBadge) => html`<ao-badge color=${color} aria-label="${ariaLabel}"
  >${innerText}</ao-badge
>`;
export const BadgeColorsOptions = BadgeColors.bind({});

BadgeColorsOptions.args = {
  innerText: "5",
  color: "blue-500",
  ariaLabel: "accessible label",
};