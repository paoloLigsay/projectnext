import type { Meta, StoryObj } from '@storybook/react';

import { Wysiwyg } from '.';

const meta: Meta<typeof Wysiwyg> = {
  title: 'Molecules/Wysiwyg',
  component: Wysiwyg
};

export default meta;
type Story = StoryObj<typeof Wysiwyg>;

export const Default: Story = {
  args: {}
};
