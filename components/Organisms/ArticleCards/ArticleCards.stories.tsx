import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCards } from '.';

const meta: Meta<typeof ArticleCards> = {
  title: 'Organisms/ArticleCards',
  component: ArticleCards
};

export default meta;
type Story = StoryObj<typeof ArticleCards>;

export const Default: Story = {
  args: {
    "cardBlocks": [
      {
        "cardTitle": "This is an article",
        "cardCopy": "Know more about article creation, Next JS is used with the following dependencies: Plop, Jest, Storybook, and many more.",
        cardUrl: "/"
      },
      {
        "cardTitle": "This is an article",
        "cardCopy": "Know more about article creation, Next JS is used with the following dependencies: Plop, Jest, Storybook, and many more.",
        cardUrl: "/"
      },
      {
        "cardTitle": "This is an article",
        "cardCopy": "Know more about article creation, Next JS is used with the following dependencies: Plop, Jest, Storybook, and many more.",
        cardUrl: "/"
      }
    ]
  }
};
