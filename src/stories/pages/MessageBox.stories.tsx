import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MessageBox from 'pages/message-box';
import React from 'react';

import PageTemplate from './PageTemplate';

export default {
  title: 'pages/MessageBox',
  component: MessageBox,
} as ComponentMeta<typeof MessageBox>;

const Template: ComponentStory<typeof MessageBox> = (args) => (
  <PageTemplate>
    <MessageBox {...args} />
  </PageTemplate>
);

export const Primary = Template.bind({});

Primary.args = {};
