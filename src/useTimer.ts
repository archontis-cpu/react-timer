import { useCallback, useEffect, useState } from "react";

export function useTimer(endtime: string) {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const addZero = useCallback((num: string) => {
    return +num <= 9 ? "0" + num : num;
  }, []);

  useEffect(() => {
    function updateClock() {
      const milliseconds =
        Date.parse(endtime) - Date.parse(new Date().toString());

      if (milliseconds <= 0) {
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");

        return () => clearInterval(timeInterval);
      } else {
        const time = {
          days: Math.floor(milliseconds / (1000 * 60 * 60 * 24)).toString(),
          hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24).toString(),
          minutes: Math.floor((milliseconds / 1000 / 60) % 60).toString(),
          seconds: Math.floor((milliseconds / 1000) % 60).toString(),
        };

        setDays(addZero(time.days));
        setHours(addZero(time.hours));
        setMinutes(addZero(time.minutes));
        setSeconds(addZero(time.seconds));
      }
    }

    const timeInterval = setInterval(updateClock, 1000);
  }, [addZero, endtime]);

  return [days, hours, minutes, seconds];
}
