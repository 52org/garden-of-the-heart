import { useAppSelector } from 'hooks';
import React from 'react';
import Redirect from 'router/componenets/Redirect';

import CreateLetter from './CreateLetter';

const CreateLetterWrapper: React.FC = () => {
  const { uuid, createLetterData } = useAppSelector((state) => state.base);

  if (!createLetterData || !uuid) {
    return <Redirect to='/home' />;
  }

  return <CreateLetter uuid={uuid} letter={createLetterData} />;
};

export default CreateLetterWrapper;
