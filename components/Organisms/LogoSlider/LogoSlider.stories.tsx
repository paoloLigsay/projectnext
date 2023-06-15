import type { Meta, StoryObj } from '@storybook/react';

import { LogoSlider } from '.';

const meta: Meta<typeof LogoSlider> = {
  title: 'Organisms/LogoSlider',
  component: LogoSlider
};

export default meta;
type Story = StoryObj<typeof LogoSlider>;

export const Default: Story = {
  args: {}
};
