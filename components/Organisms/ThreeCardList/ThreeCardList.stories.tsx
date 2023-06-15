import type { Meta, StoryObj } from '@storybook/react';

import { ThreeCardList } from '.';

const meta: Meta<typeof ThreeCardList> = {
  title: 'Organisms/ThreeCardList',
  component: ThreeCardList
};

export default meta;
type Story = StoryObj<typeof ThreeCardList>;

export const Default: Story = {
  args: {}
};
