export default {
  title: 'Components/Form/Checkbox',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    form: {
      control: { type: 'text' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    inputId: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    nativeValue: {
      control: { type: 'text' },
    },
    trueValue: {
      control: { type: 'text' },
    },
    falseValue: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    }
  },
};

const Template = (args: any) => `
  <uv-checkbox
    disabled="${args.disabled}"
    form="${args.form}"
    indeterminate="${args.indeterminate}"
    inputId="${args.inputId}"
    name="${args.name}"
    native-value="${args.nativeValue}"
    true-value="${args.trueValue}"
    false-value="${args.falseValue}"
    required="${args.required}"
  >
    Checkbox
  </uv-checkbox>
`;

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  indeterminate: false,
  inputId: 'uv-checkbox',
  name: '',
  nativeValue: "No",
  trueValue: "Yes",
  falseValue: "No",
  required: false,
};
