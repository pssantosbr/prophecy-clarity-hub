import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2024-11-30T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-secondary border-2 border-primary rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[100px] pulse-glow">
        <span className="text-3xl md:text-5xl font-bold font-heading text-primary">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground mt-2 font-body uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <TimeBox value={timeLeft.days} label="Days" />
      <span className="text-4xl md:text-6xl text-primary self-start mt-4 md:mt-6">:</span>
      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className="text-4xl md:text-6xl text-primary self-start mt-4 md:mt-6">:</span>
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className="text-4xl md:text-6xl text-primary self-start mt-4 md:mt-6">:</span>
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
