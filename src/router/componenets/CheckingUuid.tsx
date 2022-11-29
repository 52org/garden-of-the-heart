import { useAppSelector } from 'hooks';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import Redirect from './Redirect';

const CheckingUuid: React.FC = () => {
  const { uuid, name } = useAppSelector((state) => state.base);
  console.log(uuid, name);
  if (!uuid || !name) {
    toast.error('잘못된 접근입니다.');

    return <Redirect to='/home' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default CheckingUuid;
