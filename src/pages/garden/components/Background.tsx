import '../assets/Background.scss';

import React from 'react';

const Background: React.FC = () => {
  return (
    <div className='absolute top-0 left-0 z-0 w-full h-full overflow-hidden pointer-events-none'>
      <figure className='w-full animation'>
        <section
          className='animation__block'
          role='img'
          aria-label='Animation of the sun rising very quickly'
        >
          <div className='hill front red-dk'></div>
          <div className='hill back red'></div>
          <div className='sun'></div>
        </section>
      </figure>
    </div>
  );
};

export default Background;
