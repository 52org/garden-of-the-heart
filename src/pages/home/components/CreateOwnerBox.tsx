import { useAppDispatch } from 'hooks';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCreateOwnerData } from 'store/modules/base';
import { Token } from 'utils/token';

const CreateOwnerBox: React.FC = () => {
  const [name, setName] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setOwnerData = useCallback(() => {
    if (!name || name === '') {
      return null;
    }

    const uuid = Token.getUUID();

    dispatch(setCreateOwnerData({ uuid, name }));
    navigate('/create-owner');
  }, [dispatch, navigate, name]);

  return (
    <div className='w-full'>
      <div className=''>
        <input className='' type='text' onChange={changeName} />
      </div>
      <button onClick={setOwnerData}>텃밭 만들러 가기</button>
    </div>
  );
};

export default CreateOwnerBox;
