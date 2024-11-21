import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green'],
    },
  },
};

const Template = (args) => <Button {...args} />;

// القصة الأولى: Primary
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  color: 'blue',
  children: 'Primary Button',
};

// القصة الثانية: Secondary
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  color: 'red',
  children: 'Secondary Button',
};

// القصة الثالثة: Text
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  size: 'medium',
  color: 'green',
  children: 'Text Button',
};
