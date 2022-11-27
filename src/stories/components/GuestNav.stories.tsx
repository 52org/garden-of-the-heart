import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import GuestNav from '../../components/guest-nav';

export default {
  title: 'components/GuestNav',
  component: GuestNav,
} as ComponentMeta<typeof GuestNav>;

const Template: ComponentStory<typeof GuestNav> = (args) => (
  <div className='w-[450px] h-screen bg-amber-300 relative'>
    <div className='absolute bottom-0 left-0 w-full'>
      <GuestNav {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  foo: '안녕하세여',
  poo: '감사합니다.',
};
