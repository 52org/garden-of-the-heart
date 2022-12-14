import * as NavImage from 'assets/image/gnb';
import { useAppSelector } from 'hooks';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const GuestNav: React.FC = () => {
  const { uuid } = useAppSelector((state) => state.base);

  const gardenLink = useMemo(() => `/guest/garden/${uuid ?? ''}`, [uuid]);

  return (
    <nav className='flex items-center justify-around w-full'>
      <div className='container flex flex-wrap items-center justify-between h-20 mx-auto'>
        <div className='flex items-center justify-center w-20 h-20 ml-6 overflow-hidden bg-gray-200 rounded-full shadow-lg'>
          <Link to='/seedbag'>
            <img className='h-20' src={NavImage.seedbag_gnb} alt='메세지 보내기' />
          </Link>
        </div>
        <div className='flex items-center justify-center w-20 h-20 p-3 mr-6 overflow-hidden bg-gray-200 rounded-full shadow-lg'>
          <Link to={gardenLink}>
            <img className='h-20' src={NavImage.location_gnb} alt='텃밭' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GuestNav;
