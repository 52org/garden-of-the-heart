import { useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import GardenTutorial from './components/GardenTutorial';
import MessageBoxTutorial from './components/MessageBoxTutorial';
import MessageFormTutorial from './components/MessageFormTutorial';
import SeedBagTutorial from './components/SeedBagTutorial';
import SeedTutorial from './components/SeedTutorial';
import WateringTutorial from './components/WateringTutorial';

interface SequenceProps {
  [key: number]: JSX.Element;
}

const TUTORIAL_PAGE = 6;

const TutorialHost: React.FC = () => {
  const navigate = useNavigate();
  const { uuid } = useAppSelector((state) => state.base);
  const [tutorialLevel, setTutorialLevel] = useState(0);

  const tutorialSequence: SequenceProps = {
    0: <GardenTutorial tutorialCounter={setTutorialLevel} />,
    1: <WateringTutorial tutorialCounter={setTutorialLevel} />,
    2: <MessageBoxTutorial tutorialCounter={setTutorialLevel} />,
    3: <SeedBagTutorial tutorialCounter={setTutorialLevel} />,
    4: <SeedTutorial tutorialCounter={setTutorialLevel} />,
    5: <MessageFormTutorial tutorialCounter={setTutorialLevel} />,
  };

  useEffect(() => {
    if (tutorialLevel === TUTORIAL_PAGE) {
      toast.success('튜토리얼이 완료되었습니다!');
      window.localStorage.setItem('tutorial', 'DONE');
      navigate(`host/garden/${uuid}`);
    }
  }, [tutorialLevel]);

  return <>{tutorialSequence[tutorialLevel]}</>;
};

export default TutorialHost;
