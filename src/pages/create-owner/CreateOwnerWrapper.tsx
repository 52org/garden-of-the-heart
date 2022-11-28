import { useAppSelector } from 'hooks';
import React from 'react';
import Redirect from 'router/componenets/Redirect';

import CreateOwner from './CreateOwner';

const CreateOwnerWrapper: React.FC = () => {
  const { createOwnerData } = useAppSelector((state) => state.base);

  if (!createOwnerData) {
    return <Redirect to='/home' />;
  }

  return <CreateOwner owner={createOwnerData} />;
};

export default CreateOwnerWrapper;
