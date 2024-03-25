import { fn } from '@storybook/test';

export default {
  title: 'Components/UvButton',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      action: 'onClick',
    }
  },
  args: {
    onClick: fn()
  }
};

const Template = (args) => `<uv-button disabled="${args.disabled}">${args.label}</uv-button>`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  disabled: false,
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
}
