import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HOST_URL } from 'utils/api/constants/url';

const UrlShareButton: React.FC = () => {
  const { uuid } = useParams();

  const saveHostUrlInClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(`${HOST_URL}/guest/garden/${uuid}`)
      .then(() => {
        toast.success('클립보드에 복사되었습니다!');
      })
      .catch((err) => {
        toast.error('클립보드에 복사가 실패했습니다.');
      });
  }, [uuid]);

  return (
    <button className='border border-gray-300 border-solid' onClick={saveHostUrlInClipboard}>
      공유하기
    </button>
  );
};

export default UrlShareButton;
