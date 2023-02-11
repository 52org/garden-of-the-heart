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

const TutorialHost: React.FC = () => {
  const [tutorialLevel, setTutorialLevel] = useState(0);
  const navigate = useNavigate();

  const { uuid } = useAppSelector((state) => state.base);

  const goNextTutorial = () => {
    setTutorialLevel((prev) => ++prev);
  };

  const TUTORIAL_PAGE = 6;
  const tutorialSequence: SequenceProps = {
    0: <GardenTutorial tutorialHandler={goNextTutorial} />,
    1: <WateringTutorial tutorialHandler={goNextTutorial} />,
    2: <MessageBoxTutorial tutorialHandler={goNextTutorial} />,
    3: <SeedBagTutorial tutorialHandler={goNextTutorial} />,
    4: <SeedTutorial tutorialHandler={goNextTutorial} />,
    5: <MessageFormTutorial tutorialHandler={goNextTutorial} />,
  };

  useEffect(() => {
    if (tutorialLevel === TUTORIAL_PAGE) {
      toast.success('튜토리얼이 완료되었습니다!');
      window.localStorage.setItem('tutorial', 'DONE');
      navigate(`host/garden/${uuid}`);
    }
  }, [tutorialLevel, navigate, uuid]);

  return <>{tutorialSequence[tutorialLevel]}</>;
};

export default TutorialHost;
