import type { Meta, StoryObj } from '@storybook/react';

import { ContentWithImageLayout } from '.';

const meta: Meta<typeof ContentWithImageLayout> = {
  title: 'Organisms/ContentWithImageLayout',
  component: ContentWithImageLayout
};

export default meta;
type Story = StoryObj<typeof ContentWithImageLayout>;

export const Default: Story = {
  args: {}
};
