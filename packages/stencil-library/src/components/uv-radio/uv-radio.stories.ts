export default {
  title: 'Components/Form/Radio',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    form: {
      control: { type: 'text' },
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
    required: {
      control: { type: 'boolean' },
    }
  },
};

const Template = (args: any) => `
  <uv-radio
    disabled="${args.disabled}"
    form="${args.form}"
    inputId="${args.inputId}"
    name="${args.name}"
    native-value="${args.nativeValue}"
    required="${args.required}"
  >
    Radio
  </uv-radio>
`;

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  inputId: 'uv-radio',
  name: '',
  nativeValue: "No",
  required: false,
};
