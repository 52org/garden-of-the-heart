import { useEffect, useState } from "react";

export default function useTimer(endSeconds: number, callback: any) {

  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (seconds <= endSeconds) {

      const timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      callback();
    }
  }, [seconds, endSeconds, callback]);

  return [seconds, setSeconds] as const;
}