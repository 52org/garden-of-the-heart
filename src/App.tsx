import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from 'router';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-pink-100 md:bg-[url(https://img.freepik.com/free-vector/fruits-corner-border-paper-textured-background_53876-99176.jpg?w=1800&t=st=1669717866~exp=1669718466~hmac=9107aeea0c68454764052fd68439a687135d0df5dd04af43e6468e5535f5cf08)] bg-cover'>
      <div className='App w-full relative max-w-[450px] min-w-[375px] h-screen bg-bgColor-100 font-gamja'>
        <Router />
        <ToastContainer position='bottom-right' hideProgressBar autoClose={500} closeOnClick />
      </div>
    </div>
  );
};

export default App;
