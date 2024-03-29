import type { Tutorial } from 'entities/tutorial';
import useGetLetterList from 'hooks/useGetLetterList';
import useTutorialDetailCounter from 'hooks/useTutorialDetailCounter';
import EmptyMessage from 'pages/message-box/components/EmptyMessage';
import MessageBoxItem from 'pages/message-box/components/MessageBoxItem';
import React from 'react';

import BackgroundHider from './BackgroundHider';
import HighlightDescription from './HighlightDescription';

const MessageBoxTutorial: React.FC<Tutorial> = ({ tutorialHandler }) => {
  const TUTORIAL_DONE = 1;
  const [count, setCount] = useTutorialDetailCounter(TUTORIAL_DONE, tutorialHandler);

  const { data } = useGetLetterList();

  return (
    <div className='box-border relative h-screen px-8 mx-auto overflow-auto rounded'>
      <h1
        className={
          count === 0
            ? 'py-5 text-2xl text-center relative bg-white z-[100] rounded-xl pointer-events-none '
            : 'py-5 text-2xl text-center'
        }
      >
        편지 리스트
      </h1>
      {count === 0 && (
        <HighlightDescription
          direction='top'
          content='씨앗이 다 자라서 열어본 편지 목록을 볼 수 있어요'
        />
      )}
      {data && Array.isArray(data) && data[0] ? (
        <ul className='[&>li]:mb-7 rounded h-auto'>
          {data.map((item) => (
            <MessageBoxItem key={item.letterId} letter={item} />
          ))}
        </ul>
      ) : (
        <EmptyMessage />
      )}
      <BackgroundHider tutorialCounter={setCount} />
    </div>
  );
};

export default MessageBoxTutorial;
