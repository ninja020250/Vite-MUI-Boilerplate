import { useMemoizedFn } from "ahooks";
import dayjs from "dayjs";
import _debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";

interface UseActivityTrackerProps {
  timeoutInMinutes: number;
  onTimeout: () => void;
}

const useActivityTracker = ({ onTimeout, timeoutInMinutes }: UseActivityTrackerProps) => {
  const timeoutRef = useRef<number | null>(null);
  const [lastActivity, setLastActivity] = useState(dayjs().toISOString());
  const setLastActivityTime = useMemoizedFn(
    _debounce(() => {
      setLastActivity(dayjs().toISOString());
      // localStorage.setItem("LAST_ACTIVITY", dayjs().toISOString());
    }, 300)
  );

  const getLastActivityTime = useMemoizedFn(
    _debounce(() => {
      // const isoString = localStorage.getItem("LAST_ACTIVITY");
      return lastActivity ? dayjs(lastActivity) : dayjs();
    })
  );

  useEffect(() => {
    const handleActivity = () => {
      setLastActivityTime();
    };

    const checkInactivity = () => {
      const currentTime = dayjs();
      const lastActivityTime = getLastActivityTime();
      const inActiveDuration = currentTime.diff(lastActivityTime, "minutes");

      if (inActiveDuration >= timeoutInMinutes) {
        onTimeout();
      }
    };

    timeoutRef.current = window.setInterval(checkInactivity, 5000); // 5s

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("visibilitychange", handleActivity);

    return () => {
      // Stop countdown on unmount
      if (timeoutRef.current != null) {
        window.clearInterval(timeoutRef.current);
      }

      // remove event listener
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("visibilitychange", handleActivity);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getLastActivityTime();
};

export default useActivityTracker;
