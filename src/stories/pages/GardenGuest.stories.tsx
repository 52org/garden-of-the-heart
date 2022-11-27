import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import GardenGuest from '../../pages/garden-guest';
import PageTemplate from './PageTemplate';

export default {
  title: 'pages/GardenGuest',
  component: GardenGuest,
} as ComponentMeta<typeof GardenGuest>;

const Template: ComponentStory<typeof GardenGuest> = (args) => (
  <PageTemplate>
    <GardenGuest {...args} />
  </PageTemplate>
);

export const Primary = Template.bind({});

Primary.args = {};
