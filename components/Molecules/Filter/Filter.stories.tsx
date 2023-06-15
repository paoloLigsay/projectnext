import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from '.';

const meta: Meta<typeof Filter> = {
  title: 'Molecules/Filter',
  component: Filter
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {}
};
