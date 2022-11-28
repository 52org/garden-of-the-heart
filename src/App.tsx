import React from 'react';
import Router from 'router';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen overflow-auto bg-pink-100 '>
      <div className='App max-w-[450px] min-w-[300px] h-screen bg-bgColor-100'>
        <Router />
      </div>
    </div>
  );
};

export default App;
