"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2024-03-25");
  return (
    <div>
      <Countdown className="text-white font-bold text-5xl" date={endingDate} />
    </div>
  );
};

export default CountDown;
