import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from '.';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {}
};
