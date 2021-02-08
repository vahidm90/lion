# Components >> Inputs >> Input Datepicker >> Overview ||10

`lion-input-datepicker` component is based on the date text input field. Its purpose is to provide a way for users to fill in a date with a datepicker.
For an input field with a big range, such as `birthday-input`, a datepicker is not the best choice due to the high variance between possible inputs.
We encourage using the standard [lion-input-date](/docs/components/inputs/input-date/overview/) for this.

```js script
import { html } from '@lion/core';
import '@lion/input-datepicker/lion-input-datepicker.js';
```

```js preview-story
export const main = () => {
  return html` <lion-input-datepicker label="Date" name="date"></lion-input-datepicker> `;
};
```

## Features

- Input field with a datepicker to help to choose a date
- Based on [lion-input-date](/docs/components/inputs/input-date/overview/)
- Makes use of [lion-calendar](/docs/components/inputs/calendar/overview/) inside the datepicker
- Makes use of [formatDate](](/docs/systems/localize/dates/) for formatting and parsing.
- Option to overwrite locale to change the formatting and parsing
- Can make use of date specific [validators](/docs/systems/form/validate/) with corresponding error messages in different languages
  - IsDate (default)
  - MinDate
  - MaxDate
  - MinMaxDate
  - IsDateDisabled

## How to use

### Installation

```bash
npm i --save @lion/input-datepicker
```

```js
import { LionInputDatepicker } from '@lion/input-datepicker';
// or
import '@lion/input-datepicker/lion-input-datepicker.js';
```