import React, { useState, useEffect } from 'react';

const BidTimer = () => {
  const [prize , setPrize]=useState(10200);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    fps: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
 const increment=()=>{
  setPrize( prize * 2);
 }
 const decrement=()=>{
  if(prize>10200){
    setPrize( prize / 2);
  }
  
 }
  // Timer countdown logic
  useEffect(() => {
    let timerInterval = null;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds, fps } = prevTime;

          // Update the timer logic
          if (fps > 0) {
            fps -= 1;
          } else if (seconds > 0) {
            fps = 59;
            seconds -= 1;
          } else if (minutes > 0) {
            fps = 59;
            seconds = 59;
            minutes -= 1;
          } else if (hours > 0) {
            fps = 59;
            seconds = 59;
            minutes = 59;
            hours -= 1;
          }

          return { hours, minutes, seconds, fps };
        });
      }, 16.67); // 60 fps
    }

    return () => clearInterval(timerInterval); // Cleanup interval on unmount
  }, [isRunning]);

  const toggleTimer = () => {
    // If starting the timer, initialize it to a specific value (e.g., 1 hour)
    if (!isRunning) {
      setTime({ hours: 1, minutes: 0, seconds: 0, fps: 0 }); // Adjust this as needed
    }
    setIsRunning((prev) => !prev); // Toggle the timer
  };

  return (
    <div className="text-center mt-5 border rounded-lg w-full lg:w-3/4 mx-auto px-5 lg:px-10 bg-white">
      <div>
        <button
          onClick={toggleTimer}
          className="bg-[#063d64] text-white px-4 py-2 rounded mb-3 mt-5"
        >
          {isRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
      </div>
      <div
        className="py-4 px-3 mx-auto rounded-lg flex flex-col lg:flex-row items-center justify-center gap-5"
        style={{ boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.3)' }}
      >
        <h2 className="font-bold text-[#063d64]">Elapsed Time:</h2>
        <div className="text-2xl font-mono flex justify-center lg:space-x-2 space-x-1">
          <div>
            <span className="text-[#063d64]">{String(time.hours).padStart(2, '0')}</span>
            <span className="block text-sm">Hrs</span>
          </div>
          <div className="text-[#063d64]">:</div>
          <div>
            <span className="text-[#063d64]">{String(time.minutes).padStart(2, '0')}</span>
            <span className="block text-sm">Mins</span>
          </div>
          <div className="text-[#063d64]">:</div>
          <div>
            <span className="text-[#063d64]">{String(time.seconds).padStart(2, '0')}</span>
            <span className="block text-sm">Sec</span>
          </div>
          <div className="text-[#063d64]">:</div>
          <div>
            <span className="text-[#063d64]">{String(time.fps).padStart(2, '0')}</span>
            <span className="block text-sm">Fps</span>
          </div>
        </div>
      </div>
      <h2 className="text-[#063d64] text-xl my-3">Current Price:{prize} SAR</h2>
      <div className="flex justify-center gap-3">
        <button className="" onClick={decrement}>
          <p className="border rounded px-4 py-2 bg-[#063d64] text-white">-</p>
        </button>
        <p className="border rounded text-[#063d64] px-3 py-2">{prize} SAR</p>
        <button onClick={increment}>
          <p className="border rounded px-4 py-2 bg-[#063d64] text-white">+</p>
        </button>
      </div>
      <h1 className="my-3 text-xl font-medium">
        <span className="text-[#063d64]">Current Winner:</span> Muhammad ZTR
      </h1>
    </div>
  );
};

export default BidTimer;
