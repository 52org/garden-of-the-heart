import { useEffect, useState } from 'react';

export default function useTutorialDetailCounter(done: number, counter: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === done) {
      counter();
      return;
    }
  }, [count, done, counter]);
  return [count, setCount] as const;
}
