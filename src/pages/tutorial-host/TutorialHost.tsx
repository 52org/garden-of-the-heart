import React, { useEffect, useState } from 'react';

import GardenTutorial from './components/GardenTutorial';
import MessageBoxTutorial from './components/MessageBoxTutorial';
import MessageFormTutorial from './components/MessageFormTutorial';
import SeedBagTutorial from './components/SeedBagTutorial';
import SeedTutorial from './components/SeedTutorial';
import WateringTutorial from './components/WateringTutorial';

const TutorialHost: React.FC = () => {
  const [tutorialLevel, setTutorialLevel] = useState(0);

  useEffect(() => {
    setTutorialLevel(0);
  }, []);

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
