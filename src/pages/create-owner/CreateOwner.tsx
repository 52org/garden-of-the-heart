import type { Owner } from 'entities/owner';
import { useAppDispatch } from 'hooks';
import useCreateGarden from 'hooks/useCreateGarden';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCreateOwnerData } from 'store/modules/base';
import { HOST_URL } from 'utils/api/constants/url';

interface CreateOwnerProps {
  owner: Owner;
}

const CreateOwner: React.FC<CreateOwnerProps> = ({ owner }) => {
  const hostUrl = useMemo(() => `${HOST_URL}/host/garden/${owner.uuid}`, [owner]);

  const { isSuccess, mutate } = useCreateGarden();

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
    if (isSuccess) {
      navigate(`/host/garden/${owner.uuid}`);
      dispatch(clearCreateOwnerData());
    }
  }, [isSuccess, owner, navigate, dispatch]);

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div className='w-full h-full'>
      하단에 저장해주세요.
      <button className='' onClick={saveHostUrlInClipboard}>
        {hostUrl}
      </button>
      남에게 알려주면 안됩니다.
      <button onClick={moveHostGarden}>정원으로 이동하기</button>
    </div>
  );
};

export default CreateOwner;
