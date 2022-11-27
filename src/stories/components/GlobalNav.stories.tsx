import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalNav from '../../components/global-nav';

export default {
  title: 'components/GlobalNav',
  component: GlobalNav,
} as ComponentMeta<typeof GlobalNav>;

const Template: ComponentStory<typeof GlobalNav> = (args) => <GlobalNav {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  foo: "안녕하세여",
  poo: "감사합니다."
};