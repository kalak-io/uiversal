# uv-numberinput



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                               | Type       | Default         |
| ------------- | ------------- | ----------------------------------------------------------------------------------------- | ---------- | --------------- |
| `disabled`    | `disabled`    | (optional) Whether the form control is disabled                                           | `boolean`  | `false`         |
| `form`        | `form`        | (optional) Associates the control with a form element                                     | `string`   | `null`          |
| `inputId`     | `input-id`    | (optional) Id of the form control                                                         | `string`   | `'uv-checkbox'` |
| `list`        | `list`        | (optional) Value of the id attribute of the <datalist> of autocomplete options            | `string`   | `null`          |
| `max`         | `max`         | (optional) Maximum value                                                                  | `number`   | `null`          |
| `min`         | `min`         | (optional) Minimum value                                                                  | `number`   | `null`          |
| `name`        | `name`        | (optional) Name of the form control. Submitted with the form as part of a name/value pair | `string`   | `null`          |
| `options`     | --            | (optional) Options for the <datalist>                                                     | `string[]` | `[]`            |
| `placeholder` | `placeholder` | (optional) Text that appears in the form control when it has no value set                 | `string`   | `null`          |
| `readonly`    | `readonly`    | (optional) The value is not editable                                                      | `boolean`  | `false`         |
| `step`        | `step`        | (optional) Step value                                                                     | `string`   | `"any"`         |
| `value`       | `value`       | (optional) The initial value of the control                                               | `string`   | `null`          |


## Events

| Event     | Description                                    | Type                  |
| --------- | ---------------------------------------------- | --------------------- |
| `updated` | Triggers when the value of checkbox is changed | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
