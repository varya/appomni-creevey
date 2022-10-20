import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import { ariaProperty } from "../_common/ariaproperty";
import style from "./badge.css";

/** Appomni Badge  */
@customElement("ao-badge")
export class AoBadge extends LitElement {
  /**
   * Badge's attribute selected
   * @attr selected
   * @type {Boolean | undefined}
   */
  @property({ type: Boolean, reflect: true })
  selected?;

  /**
   * Badge's color (optional)
   * @attr color
   * @type {String | undefined}
   */
  @property({ type: String, reflect: true })
  color?: "blue-600" | "blue-500";

  /**
   * Aria-label text for the badge.
   * @attr Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen.
   * @type {String}
   */
  @ariaProperty
  @property({ type: String, attribute: "data-aria-label", noAccessor: true })
  override ariaLabel!: string;

  render() {
    const { selected, ariaLabel, color } = this;

    const badgeClasses = {
      "ao-badge": true,
      "ao-badge--selected": selected,
      "ao-badge--blue-600": color === "blue-600",
      "ao-badge--blue-500": color === "blue-500",
    };

    return html`<span
      class=${classMap(badgeClasses)}
      ?color=${color}
      role="status"
      ?selected=${selected}
      aria-label=${ariaLabel}
    >
      <div class="ao-badge__text"><slot></slot></div>
    </span>`;
  }

  static styles = unsafeCSS(style);
}
