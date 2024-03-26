export default {
  title: 'Components/Form/Range',
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
    list: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'array' },
    },
    value: {
      control: { type: 'text' },
    }
  }
};

const Template = (args: any) => {
  return `
    <uv-range
      disabled="${args.disabled}"
      form="${args.form}"
      id="${args.inputId}"
      list="${args.list}"
      name="${args.name}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      options="${args.options}"
      value="${args.value}"
    />
  `;
};

export const Standalone = Template.bind({});
Standalone.args = {
  disabled: false,
  form: '',
  inputId: 'uv-range',
  list: null,
  name: '',
  min: 0,
  max: 100,
  step: 'any',
  options: [],
  value: '50'
};
