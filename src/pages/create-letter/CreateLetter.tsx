import LetterAnimation from 'components/animations';
import ErrorModal from 'components/error-modal';
import type { LetterData } from 'entities/request';
import { useAppDispatch, useAppSelector } from 'hooks';
import useTimer from 'hooks/useSecondsTimer';
import useSendLetter from 'hooks/useSendLetter';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCreateLetterData } from 'store/modules/base';

interface CreateLetterProps {
  letter: LetterData;
  uuid: string;
}

const CreateLetter: React.FC<CreateLetterProps> = ({ letter, uuid }) => {
  const [isErrorModal, setErrorModal] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const endCallback = useCallback(() => {
    setCheck(true);
  }, []);

  useTimer(4, endCallback);

  const { errorMessage, isLoading } = useAppSelector((state) => state.base);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate } = useSendLetter();

  const closeModal = useCallback(() => {
    setErrorModal(false);
    dispatch(clearCreateLetterData());
    navigate(`/home`);
  }, [dispatch]);

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (check && !isLoading && !errorMessage) {
      toast.success('전송 성공😍');
      navigate(`/guest/garden/${uuid}`);
    }
  }, [check, isLoading, navigate, uuid]);

  useEffect(() => {
    if (errorMessage) {
      setErrorModal(true);
    }
  }, [errorMessage]);

  return (
    <div className='flex items-center justify-center w-full h-full overflow-auto'>
      <div className='p-4'>
        <LetterAnimation />
      </div>
      <ErrorModal isOpen={isErrorModal} title='Server Error' closeModal={closeModal}>
        {errorMessage}
      </ErrorModal>
    </div>
  );
};

export default CreateLetter;
