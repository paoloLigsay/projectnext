import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from '.';

const meta: Meta<typeof ArticleCard> = {
  title: 'Molecules/ArticleCard',
  component: ArticleCard
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: 'This is an Article',
    description: 'How is this written? This project is created with..',
    url: '/'
  }
};
