import type { ComponentMeta, ComponentStory } from '@storybook/react';
import SeedBag from 'pages/seed-bag';
import React from 'react';

import PageTemplate from './PageTemplate';

export default {
  title: 'pages/SeedBag',
  component: SeedBag,
} as ComponentMeta<typeof SeedBag>;

const Template: ComponentStory<typeof SeedBag> = (args) => (
  <PageTemplate>
    <SeedBag {...args} />
  </PageTemplate>
);

export const Primary = Template.bind({});

Primary.args = {};
