import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Seed from 'pages/seed';
import React from 'react';

import PageTemplate from './PageTemplate';

export default {
  title: 'pages/Seed',
  component: Seed,
} as ComponentMeta<typeof Seed>;

const Template: ComponentStory<typeof Seed> = (args) => (
  <PageTemplate>
    <Seed {...args} />
  </PageTemplate>
);

export const Primary = Template.bind({});

Primary.args = {};
