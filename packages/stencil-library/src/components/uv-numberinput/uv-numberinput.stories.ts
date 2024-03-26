export default {
  title: 'Components/Form/Numberinput',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    form: {
      control: { type: 'text' },
    },
    list: {
      control: { type: 'text' },
    },
    inputId: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    max: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    options: {
      control: { type: 'array' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    step: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    }
  },
};

const Template = (args: any) => `
  <uv-numberinput
    disabled="${args.disabled}"
    readonly="${args.readonly}"
    form="${args.form}"
    inputId="${args.inputId}"
    list="${args.list}"
    name="${args.name}"
    min="${args.min}"
    max="${args.max}"
    placeholder="${args.placeholder}"
    step="${args.step}"
    value="${args.value}"
  />
`;

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  inputId: 'uv-numberinput',
  list: null,
  max: null,
  min: null,
  name: '',
  placeholder: 'Placeholder',
  readonly: false,
  step: 'any',
  value: '0',
}
