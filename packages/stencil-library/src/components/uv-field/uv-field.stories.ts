export default {
  title: 'Components/Form/Field',
  argTypes: {
    label: {
      name: 'label',
      control: {
        type: 'text',
      },
    },
    message: {
      name: 'message',
      control: {
        type: 'text',
      },
    }
  }
}

const Template = (args) => `<uv-field label="${args.label}" message="${args.message}" />`;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  message: 'Message'
}
