// Typography.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import UiTypography from './UiTypography';
import { ITypographyProps } from './types';

export default {
  title: 'Components/Typography',
  component: UiTypography,
} as Meta;

const Template: Story<ITypographyProps> = (args) => <UiTypography {...args} />;

export const Heading: Story = {
  render: () => (
    <div style={{ direction: 'rtl', textAlign: 'center' }}>
      <UiTypography xs={{ p: 2 }} variant="h1" text="هدینگ 1" />
      <UiTypography xs={{ p: 2 }} variant="h2" text="هدینگ 2" />
      <UiTypography xs={{ p: 2 }} variant="h3" text="هدینگ 3" />
      <UiTypography xs={{ p: 2 }} variant="h4" text="هدینگ 4" />
      <UiTypography xs={{ p: 2 }} variant="h5" text="هدینگ 5" />
    </div>
  ),
};
