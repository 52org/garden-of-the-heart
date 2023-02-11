import BigButton from 'components/bigButton';
import BigInput from 'components/bigInput';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GardenNameInput {
  gardenName: '';
}

interface PasswordInput {
  password: string;
  passwordCheck: string;
}

const SignupGarden: React.FC = () => {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState<boolean>(true);
  const [gardenName, setGardenName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');



  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget;
  }

  const changeGardenName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGardenName(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const changePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const inputRef = useRef([])

  const submitFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(password, passwordCheck);
  
    console.log(inputRef.current);
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
  };

  return (
    <>
      <form>
        <BigInput name='gardenName' placeholder='텃밭이름' handleChange={onChange} />
        <BigInput name='password' placeholder='비밀번호 확인' handleChange={changePassword} />
        <BigInput
          name='passwordCheck'
          placeholder='비밀번호 재확인'
          handleChange={changePasswordCheck}
        />
        <BigButton buttonName='텃밭 가입하기' handleClick={submitFormHandler} />
      </form>
    </>
  );
};

export default SignupGarden;
