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
      {tutorialLevel === 1 && <GardenTutorial />}
      {tutorialLevel === 0 && <WateringTutorial />}
    </>
  );
};

export default TutorialHost;
