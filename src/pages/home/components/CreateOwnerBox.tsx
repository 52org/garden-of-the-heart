import React from 'react';

import AuthContainer from './AuthContainer';

const CreateOwnerBox: React.FC = () => {
  return (
    <div className='w-full '>
      <div
        className='m-auto'
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AuthContainer />
      </div>
    </div>
  );
};

export default CreateOwnerBox;
