import React from "react";
import swimming from "../assets/swimming.png";
import classes from "../assets/class.png";
import palyground from "../assets/playground.png";

const Qzoon = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimming} alt="" />
        <img src={classes} alt="" />
        <img src={palyground} alt="" />
      </div>
    </div>
  );
};

export default Qzoon;
