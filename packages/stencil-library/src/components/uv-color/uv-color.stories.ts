export default {
  title: 'Components/Form/Color',
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
    required: {
      control: { type: 'boolean' },
    }
  }
};

const Template = (args: any) => `
  <uv-color
    disabled="${args.disabled}"
    form="${args.form}"
    id="${args.inputId}"
    name="${args.name}"
    required="${args.required}"
  >
    Color
  </uv-color>
`;

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  inputId: 'uv-color',
  name: '',
  required: false
}
