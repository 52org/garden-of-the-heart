import React from 'react';
import { Link } from 'react-router-dom';

const HostNav: React.FC = () => {
  return (
    <nav className='flex w-full items-center justify-around'>
      <div className='container flex flex-wrap h-20 justify-between items-center mx-auto'>
        <div className='flex w-20 h-20 rounded-full overflow-hidden bg-gray-200 items-center justify-center ml-6'>
          <Link to='/'>
            <img className='h-14 sm:h-9' src='image/letterbox.png' alt='편지함' />
          </Link>
        </div>
        <div className='flex w-20 h-20 rounded-full overflow-hidden bg-gray-200 items-center justify-center mr-6'>
          <Link to='/'>
            <img className='h-14 sm:h-9' src='image/signpost.png' alt='도크네 텃밭' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HostNav;
