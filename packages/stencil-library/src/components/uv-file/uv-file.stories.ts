export default {
  title: 'Components/Form/File',
  argTypes: {
    accept: {
      control: { type: 'text' },
    },
    capture: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    form: {
      control: { type: 'text' },
    },
    list: {
      control: { type: 'text' },
    },
    multiple: {
      control: { type: 'boolean' },
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
  <uv-file
    accept="${args.accept}"
    capture="${args.capture}"
    disabled="${args.disabled}"
    form="${args.form}"
    list="${args.list}"
    multiple="${args.multiple}"
    inputId="${args.inputId}"
    name="${args.name}"
    required="${args.required}"
  />
`;

export const Standalone = Template.bind({});
Standalone.args = {
  accept: 'image/*',
  capture: '',
  disabled: false,
  form: '',
  list: '',
  multiple: false,
  inputId: 'uv-file',
  name: '',
  required: false
}
