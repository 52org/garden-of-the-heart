import type { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingSpinner from 'components/waiting/components/loading-spinner';
import React from 'react';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
