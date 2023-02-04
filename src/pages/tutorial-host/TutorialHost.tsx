import React, { useEffect, useState } from 'react';

import GardenTutorial from './components/GardenTutorial';
import WateringTutorial from './components/WateringTutorial';

const TutorialHost: React.FC = () => {
  const [tutorialLevel, setTutorialLevel] = useState(0);

  useEffect(() => {
    setTutorialLevel(0);
  }, []);

  return (
    <>
      {tutorialLevel === 0 && <GardenTutorial tutorialCounter={setTutorialLevel} />}
      {tutorialLevel === 1 && <WateringTutorial />}
    </>
  );
};

export default TutorialHost;
