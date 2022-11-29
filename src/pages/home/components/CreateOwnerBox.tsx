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
      alert('텃밭 이름을 입력해주세요!');
      return null;
    }

    const uuid = Token.getUUID();

    dispatch(setCreateOwnerData({ uuid, name }));
    navigate('/create-owner');
  }, [dispatch, navigate, name]);

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
        <input
          className='w-8/12 border-b-2 border-b-groundColor-200 mb-7 text-lg'
          style={{
            outline: 'none',
            backgroundColor: 'transparent',
            textAlign: 'center',
          }}
          type='text'
          onChange={changeName}
          placeholder='텃밭 이름을 정해주세요!'
        />
        <button
          style={{
            outline: 'none',
            // backgroundColor: 'transparent',
            padding: '11px 35px',
            border: '3px dotted #c19a85',
            backgroundColor: '#b99269',
            borderRadius: '15px',
            color: '#e7dfd4',
          }}
          onClick={setOwnerData}
        >
          <p className='text-xl font-bold'>텃밭 만들러 가기</p>
        </button>
      </div>
    </div>
  );
};

export default CreateOwnerBox;
