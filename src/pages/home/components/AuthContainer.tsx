import React, { useState } from 'react';

import LoginGarden from './LoginGarden';

const AuthContainer = () => {
  const [choiceSignupOrLogin, setChoiceSignupOrLogin] = useState<'Signup' | 'Login'>('Signup');
  return (
    <div>
      <button onClick={() => setChoiceSignupOrLogin('Signup')}>텃밭 만들기</button>
      <button onClick={() => setChoiceSignupOrLogin('Login')}>텃밭 가꾸기</button>

      {choiceSignupOrLogin === 'Signup' ? <></> : <LoginGarden />}
    </div>
  );
};

export default AuthContainer;
