import { html, css, styleMap, nothing } from '@lion/core';
import { LionProgressIndicator } from '@lion/progress-indicator';

export class CustomProgressBar extends LionProgressIndicator {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --bar-color: #8f7325;
          --border-radius: 48px;
          height: 6px;
        }

        :host([purple]) > .fill {
          --bar-color: purple;
        }

        :host > .fill {
          transition: width 1s ease-in-out;
        }

        :host([start-at]) > .fill {
          position: absolute;
        }

        :host > .separator {
          transition: background-color 1s ease-in-out;
        }
      `,
    ];
  }

  get separatorsTemplate() {
    if (!this.hasAttribute('segmented')) {
      return nothing;
    }

    return [10, 50, 90].map(
      segment => html`
        <div
          class="separator"
          ?threshold-crossed=${this.progressValue >= segment}
          style=${styleMap({ left: `${segment}%` })}
        ></div>
      `,
    );
  }

  get startAt() {
    let startAt = 0;
    if (this.hasAttribute('start-at')) {
      startAt = `${this.getAttribute('start-at')}%`;
    }
    return startAt;
  }

  get progressValue() {
    if (this.hasAttribute('start-at')) {
      const startAt = Number(this.getAttribute('start-at'));
      const availableUntil = 100 - startAt;
      return this.value > availableUntil ? availableUntil : this.value;
    }
    return super.progressValue;
  }

  get _extraTemplate() {
    return this.separatorsTemplate;
  }

  get _customStyles() {
    return {
      ...super._customStyles,
      left: this.startAt,
    };
  }
}

customElements.define('custom-progress-bar', CustomProgressBar);
