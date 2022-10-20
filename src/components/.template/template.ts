import { html, unsafeCSS, LitElement } from "lit";
import { classMap } from "lit-html/directives/class-map.js";

import { customElement, property } from "lit/decorators.js";
import style from "./template.css";

/**
 * TODO: Component description
 * @slot {HTMLElement} Default
 */
@customElement("element-name")
export class ClassName extends LitElement {
  /**
   * TODO: property description
   */
  @property({ reflect: true })
  active: boolean;

  render() {
    const templateClasses = {
      "element-name": true,
      "element-name--active": this.active,
    };

    return html`<div class=${classMap(templateClasses)}>
      <slot></slot>
    </div>`;
  }

  static styles = unsafeCSS(style);
}
