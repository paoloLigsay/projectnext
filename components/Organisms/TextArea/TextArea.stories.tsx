import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '.';

const meta: Meta<typeof TextArea> = {
  title: 'Organisms/TextArea',
  component: TextArea
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    title: 'Next JS Development Demo',
    description: 'Creting Next JS with the following dependencies might make it easier.',
    cta: {
      ctaText: 'View More',
      ctaUrl: '/',
      ctaType: 'link'
    }
  }
};
