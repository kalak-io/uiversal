export default {
  title: 'Components/Form/Input',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    form: {
      control: { type: 'text' },
    },
    maxlength: {
      control: { type: 'number' },
    },
    minlenght: {
      control: { type: 'number' },
    },
    name: {
      control: { type: 'text' },
    },
    pattern: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'number' },
    },
    type: {
      name: 'type',
      options: ['email', 'password', 'search', 'tel', 'text', 'url'],
      control: { type: 'select' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};

const Template = (args: any) => `
  <uv-input
    disabled="${args.disabled}"
    form="${args.form}"
    maxlength="${args.maxlength}"
    minlength="${args.minlength}"
    name="${args.name}"
    pattern="${args.pattern}"
    placeholder="${args.placeholder}"
    readonly="${args.readonly}"
    required="${args.required}"
    size="${args.size}"
    type="${args.type}"
    value="${args.value}"
  />
`;
const UvFieldTemplate = (args: any) => `
  <uv-field
    label="${args.label}"
    message="${args.message}"
  >
    <uv-input
      disabled="${args.disabled}"
      form="${args.form}"
      maxlength="${args.maxlength}"
      minlength="${args.minlength}"
      name="${args.name}"
      pattern="${args.pattern}"
      placeholder="${args.placeholder}"
      readonly="${args.readonly}"
      required="${args.required}"
      size="${args.size}"
      type="${args.type}"
      value="${args.value}"
    />
  </uv-field>
`;

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  maxlength: null,
  minlength: null,
  name: '',
  pattern: '',
  placeholder: 'Placeholder',
  readonly: false,
  required: false,
  size: 0,
  type: 'text',
  value: 'This is an input',
};

export const UvField = UvFieldTemplate.bind({});
UvField.args = {
  label: 'Field label',
  message: 'Field message',
  ...Standalone.args,
};
