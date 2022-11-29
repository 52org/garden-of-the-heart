import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Background from 'pages/garden/components/Background';
import React from 'react';

export default {
  title: 'components/Background',
  component: Background,
} as ComponentMeta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => (
  <div className='w-[450px] h-screen bg-amber-300 relative'>
    <div className='absolute bottom-0 left-0 w-full'>
      <Background />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
