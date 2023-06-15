import type { Meta, StoryObj } from '@storybook/react';

import { ArticleContent } from '.';

const meta: Meta<typeof ArticleContent> = {
  title: 'Organisms/ArticleContent',
  component: ArticleContent
};

export default meta;
type Story = StoryObj<typeof ArticleContent>;

export const Default: Story = {
  args: {}
};
