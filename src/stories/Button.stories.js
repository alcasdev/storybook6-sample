import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '!hex(1ea7fd)',
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: '!hex(00000000)',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: '!hex(00000000)',
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: '!hex(00000000)',
  size: 'small',
  label: 'Button',
};
