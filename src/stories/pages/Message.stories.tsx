import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Message from 'pages/message';
import React from 'react';

import PageTemplate from './PageTemplate';

export default {
  title: 'pages/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <PageTemplate>
    <Message {...args} />
  </PageTemplate>
);

export const Primary = Template.bind({});

Primary.args = {};
