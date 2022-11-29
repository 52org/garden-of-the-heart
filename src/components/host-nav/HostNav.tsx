import * as NavImage from 'assets/image/gnb';
import React from 'react';
import { Link } from 'react-router-dom';

const HostNav: React.FC = () => {
  return (
    <nav className='flex items-center justify-around w-full'>
      <div className='container flex flex-wrap items-center justify-between h-20 mx-auto'>
        <div className='flex items-center justify-center w-20 h-20 ml-6 overflow-hidden bg-gray-200 rounded-full'>
          <Link to='/'>
            <img className='h-full sm:h-9' src={NavImage.seedbag_gnb} alt='편지함' />
          </Link>
        </div>
        <div className='flex items-center justify-center w-20 h-20 mr-6 overflow-hidden bg-gray-200 rounded-full'>
          <Link to='/'>
            <img className='h-full sm:h-9' src={NavImage.signpost_gnb} alt='도크네 텃밭' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HostNav;
