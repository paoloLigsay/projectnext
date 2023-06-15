import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultData = {
  children: 'View More',
  variant: 'link',
}

export const Default: Story = {
  args: {
    ...defaultData,
    href: '/',
    newWindow: true
  }
};

export const ButtonStory: Story = {
  args: {
    ...defaultData,
    variant: 'button'
  }
}
