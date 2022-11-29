import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from 'router';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-pink-100 '>
      <div className='App w-full relative max-w-[450px] min-w-[375px] h-screen bg-bgColor-100 font-gamja'>
        <Router />
        <ToastContainer position='bottom-right' hideProgressBar autoClose={500} closeOnClick />
      </div>
    </div>
  );
};

export default App;
