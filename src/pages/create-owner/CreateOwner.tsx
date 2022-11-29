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
    <div className='flex items-center justify-center w-full h-full overflow-auto'>
      <div className='p-4'>
        하단에 저장해주세요.
        <button className='' onClick={saveHostUrlInClipboard}>
          {hostUrl}
        </button>
        남에게 알려주면 안됩니다.
        <button onClick={moveHostGarden}>정원으로 이동하기</button>
      </div>
      <ErrorModal isOpen={isErrorModal} title='Server Error' closeModal={closeModal}>
        {errorMessage}
      </ErrorModal>
    </div>
  );
};

export default CreateOwner;
