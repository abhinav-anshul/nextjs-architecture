// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import UiButton from './index';
import { IButtonProps } from './types';

const meta: Meta<typeof UiButton> = {
  title: 'Components/Buttons',
  component: UiButton
};

export default meta;
type Story = StoryObj<typeof UiButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Button: Story = {
  render: () => (
    <div style={{ textAlign: 'end' }}>
      <div>
        <h2>دکمه های اصلی</h2>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="contained" />
          <UiButton text="ثبت" variant="outlined" />
          <UiButton text="ثبت" variant="text" />
        </div>
      </div>
      <div>
        <h2>دکمه های غیرفعال</h2>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="غیرفعال" variant="contained" disabled />
          <UiButton text="غیرفعال" variant="outlined" disabled />
          <UiButton text="غیرفعال" variant="text" disabled />
        </div>
      </div>
      <div>
        <h2>سایز دکمه ها</h2>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="contained" size="small" />
          <UiButton text="ثبت" variant="contained" size="medium" />
          <UiButton text="ثبت" variant="contained" size="large" />
        </div>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="outlined" size="small" />
          <UiButton text="ثبت" variant="outlined" size="medium" />
          <UiButton text="ثبت" variant="outlined" size="large" />
        </div>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="text" size="small" />
          <UiButton text="ثبت" variant="text" size="medium" />
          <UiButton text="ثبت" variant="text" size="large" />
        </div>
      </div>
      <div>
        <h2>رنگ ها</h2>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="contained" color="success" />
          <UiButton text="ثبت" variant="contained" color="error" />
          <UiButton text="ثبت" variant="contained" color="secondary" />
        </div>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="outlined" color="success" />
          <UiButton text="ثبت" variant="outlined" color="error" />
          <UiButton text="ثبت" variant="outlined" color="secondary" />
        </div>
        <div style={{ display: 'flex ', justifyContent: 'center' }}>
          <UiButton text="ثبت" variant="text" color="success" />
          <UiButton text="ثبت" variant="text" color="error" />
          <UiButton text="ثبت" variant="text" color="secondary" />
        </div>
      </div>
    </div>
  )
};
