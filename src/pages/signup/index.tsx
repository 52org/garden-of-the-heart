import useInputs from 'hooks/useInputs';
import type { FormEvent } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState<boolean>(false);

  const gardenName = useInputs('');
  const password = useInputs('');
  const passwordCheck = useInputs('');
  // useInputs로 묶어보기

  const submitFormHandler = (e: FormEvent) => {
    console.log(password);
    console.log(gardenName);
  };

  return (
    <div>
      <p>회원가입</p>
      <form onSubmit={submitFormHandler}>
        <label htmlFor='gardenName'>텃밭 이름</label>
        <input type='text' id='gardenName' {...gardenName} />
        <label htmlFor='password'>비밀번호</label>
        <input type='text' id='password' {...password} />
        <label htmlFor='passwordCheck'>비밀번호 확인</label>
        <input type='text' id='passwordCheck' {...passwordCheck} />
        <button type='button' disabled={formValid}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
