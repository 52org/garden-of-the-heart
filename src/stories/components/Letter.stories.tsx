import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Letter from 'components/letter';
import React from 'react';

export default {
  title: 'components/Letter',
  component: Letter,
} as ComponentMeta<typeof Letter>;

const Template: ComponentStory<typeof Letter> = (args) => (
  <div className='w-[450px] h-screen bg-amber-300 relative'>
    <Letter {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
