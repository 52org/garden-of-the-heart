import BigButton from 'components/bigButton';
import BigInput from 'components/bigInput/index';
import { useAppDispatch } from 'hooks';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCreateOwnerData } from 'store/modules/base';
import { Token } from 'utils/token';

const LoginGarden = () => {
  const [gardenName, setGardenName] = useState<string>('');
  const [gardenPassword, setGardenPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeGardenName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGardenName(e.target.value);
  }, []);

  const changeGardenPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setGardenPassword(e.target.value);
  }, []);

  const setOwnerData = useCallback(() => {
    if (!gardenName || gardenName === '') {
      alert('텃밭 이름을 입력해주세요!');
      return null;
    }
    if (!gardenPassword || gardenPassword === '') {
      alert('텃밭 비밀번호를 입력해주세요!');
      return null;
    }

    const uuid = Token.getUUID();

    dispatch(setCreateOwnerData({ uuid, gardenName }));
    navigate('/create-owner');
  }, [dispatch, navigate, gardenName, gardenPassword]);

  return (
    <>
      <form>
        <BigInput
          handleChange={changeGardenName}
          placeholder='텃밭 이름을 입력해주세요!'
        ></BigInput>
        <BigInput
          handleChange={changeGardenPassword}
          placeholder='텃밭 비밀번호를 입력해주세요!'
        ></BigInput>
      </form>

      <BigButton handleClick={setOwnerData} buttonName='텃밭 가꾸러 가기' />
    </>
  );
};

export default LoginGarden;
