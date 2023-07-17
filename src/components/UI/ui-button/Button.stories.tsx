// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ColorButtons as  Button } from './index';
import { IButtonProps } from './types';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */


 export const Primary : Story = {
  args: {
    sx:{bgcolor:"red"},
    className: 'bg-rose-400',
    label: 'test number one click here',
    color:"primary"
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color:"success",
    label: '😄👍😍💯',
  },
};



export const Error: Story = {
  render: () => <Button color='error' sx={{bgcolor:"red"}}  label="Buttoooon3" className='bg-rose-400'/>,
};
export const Success: Story = {
  render: () => <Button color='success' sx={{bgcolor:"success"}} label="Button4" className='bg-green-500'  variant='contained'/>,
};
export const Info: Story = {
  render: () => <Button color='info' sx={{bgcolor:"blue"}}  label="Button5" className='bg-blue-500'  variant='text' />,
};
export const warning: Story = {
  render: () => <Button color='warning' sx={{bgcolor:"yellow"}}  label="Button6" className='bg-yellow-500' variant='outlined' />,
};