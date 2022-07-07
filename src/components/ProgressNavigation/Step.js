import React, { useEffect } from "react";
import "./Step.css";
import { useMediaQuery } from "react-responsive";

const Step = ({ className, content, currentCircle, details }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 48em)" });
  useEffect(() => {
    console.log(isBigScreen);
  }, [isBigScreen]);
  return (
    <div className="test">
      {/* <div className={className}>{currentCircle && <p>w</p>}</div> */}
      <div className={className}></div>

      {isBigScreen && <p className="center-text">{details}</p>}
    </div>
  );
};

export default Step;
