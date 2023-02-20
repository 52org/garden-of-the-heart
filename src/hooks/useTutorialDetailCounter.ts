import type { Tutorial } from 'entities/tutorial';
import { useEffect, useState } from 'react';

export default function useTutorialDetailCounter(
  done: number,
  counter: Tutorial['tutorialHandler'],
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === done) {
      counter();
      return;
    }
  }, [count, done, counter]);
  return [count, setCount] as const;
}
