import { clipboard } from 'assets/image';
import ErrorModal from 'components/error-modal';
import type { Owner } from 'entities/owner';
import { useAppDispatch, useAppSelector } from 'hooks';
import useCreateGarden from 'hooks/useCreateGarden';
import useTimer from 'hooks/useSecondsTimer';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCreateOwnerData } from 'store/modules/base';
import { HOST_URL } from 'utils/api/constants/url';

interface CreateOwnerProps {
  owner: Owner;
}

const CreateOwner: React.FC<CreateOwnerProps> = ({ owner }) => {
  const [isErrorModal, setErrorModal] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const endCallback = useCallback(() => {
    setCheck(true);
  }, []);

  useTimer(4, endCallback);

  const { errorMessage, isLoading } = useAppSelector((state) => state.base);

  const hostUrl = useMemo(() => `${HOST_URL}/host/garden/${owner.uuid}`, [owner]);

  const { mutate } = useCreateGarden();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const saveHostUrlInClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(hostUrl)
      .then(() => {
        toast.success('클립보드에 복사되었습니다!');
      })
      .catch((err) => {
        toast.error('클립보드에 복사가 실패했습니다.');
      });
  }, [hostUrl]);

  const moveHostGarden = useCallback(() => {
    if (check && !isLoading) {
      navigate(`/host/garden/${owner.uuid}`);
      dispatch(clearCreateOwnerData());
    } else {
      toast.loading('아직 생성중입니다!');
    }
  }, [check, isLoading, owner, navigate, dispatch]);

  const closeModal = useCallback(() => {
    setErrorModal(false);
    dispatch(clearCreateOwnerData());
    navigate(`/home`);
  }, [dispatch]);

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (errorMessage) {
      setErrorModal(true);
    }
  }, [errorMessage]);

  return (
    <div className='flex items-center justify-center flex-col space-y-12 w-full h-full text-center overflow-auto px-5'>
      <span className='font-extrabold text-2xl'>하단 링크를 저장해주세요.</span>
      <span className='flex justify-between items-center border-4 rounded-lg'>
        <button
          className='break-all text-base p-3.5'
          type='button'
          onClick={saveHostUrlInClipboard}
        >
          {hostUrl}
        </button>
        <div className='p-3 w-24 h-auto'>
          <img className='w-[30px]' src={clipboard} alt='클립보드' />
        </div>
      </span>
      <h2 className='font-extrabold text-2xl underline decoration-8 decoration-red-300'>
        남에게 알려주면 안됩니다.
      </h2>
      <button
        type='button'
        className='p-3 text-white bg-sky-500/100 rounded-xl'
        onClick={moveHostGarden}
      >
        정원으로 이동하기
      </button>
      {isErrorModal && (
        <ErrorModal isOpen={isErrorModal} title='Server Error' closeModal={closeModal}>
          {errorMessage}
        </ErrorModal>
      )}
    </div>
  );
};

export default CreateOwner;
