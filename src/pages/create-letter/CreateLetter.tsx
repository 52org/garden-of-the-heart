import ErrorModal from 'components/error-modal';
import type { LetterData } from 'entities/request';
import { useAppDispatch, useAppSelector } from 'hooks';
import useSendLetter from 'hooks/useSendLetter';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCreateLetterData } from 'store/modules/base';

interface CreateLetterProps {
  letter: LetterData;
  uuid: string;
}

const CreateLetter: React.FC<CreateLetterProps> = ({ letter, uuid }) => {
  const [isErrorModal, setErrorModal] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const { errorMessage } = useAppSelector((state) => state.base);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isSuccess, mutate } = useSendLetter();

  const closeModal = useCallback(() => {
    setErrorModal(false);
    dispatch(clearCreateLetterData());
    navigate(`/guest/garden/${uuid}`);
  }, [dispatch]);

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    console.log(check, setCheck, isSuccess, mutate);
    if (errorMessage) {
      setErrorModal(true);
    }
  }, [errorMessage]);

  return (
    <div className='flex items-center justify-center w-full h-full overflow-auto'>
      <div className='p-4'></div>
      <ErrorModal isOpen={isErrorModal} title='Server Error' closeModal={closeModal}>
        {errorMessage}
      </ErrorModal>
    </div>
  );
};

export default CreateLetter;
