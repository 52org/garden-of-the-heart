import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import HostNav from '../../components/host-nav';

export default {
  title: 'components/HostNav',
  component: HostNav,
} as ComponentMeta<typeof HostNav>;

const Template: ComponentStory<typeof HostNav> = (args) => (
  <div className='w-[450px] h-screen bg-amber-300 relative'>
    <div className='absolute bottom-0 left-0 w-full'>
      <HostNav {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  foo: '안녕하세여',
  poo: '감사합니다.',
};
