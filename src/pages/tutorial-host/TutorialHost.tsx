import { useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GardenTutorial from './components/GardenTutorial';
import MessageBoxTutorial from './components/MessageBoxTutorial';
import MessageFormTutorial from './components/MessageFormTutorial';
import SeedBagTutorial from './components/SeedBagTutorial';
import SeedTutorial from './components/SeedTutorial';
import WateringTutorial from './components/WateringTutorial';

const TUTORIAL_PAGE = 6;

const TutorialHost: React.FC = () => {
  const navigate = useNavigate();
  const { uuid } = useAppSelector((state) => state.base);
  const [tutorialLevel, setTutorialLevel] = useState(0);

  useEffect(() => {
    if (tutorialLevel === TUTORIAL_PAGE) {
      navigate(`host/garden/${uuid}`);
    }
  }, [tutorialLevel]);

  return (
    <>
      {tutorialLevel === 0 && <GardenTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 1 && <WateringTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 2 && <MessageBoxTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 3 && <SeedBagTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 4 && <SeedTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 5 && <MessageFormTutorial tutorialCounter={setTutorialLevel} />}
    </>
  );
};

export default TutorialHost;
