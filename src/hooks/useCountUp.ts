import { useEffect, useState } from 'react';

export default function useCountUp(end: number) {
  const [count, setCount] = useState(0);

  let currentCount = end;

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(Math.ceil(end - currentCount));

      if (currentCount < 1) {
        clearInterval(counter);
      }

      const jump = currentCount / 10;

      currentCount -= jump;
    }, 50);
  }, [end, currentCount]);

  return count;
}
