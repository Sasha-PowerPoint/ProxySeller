import React from "react";
import * as Styled from './styles';

export const Loader = (props) => (
  <Styled.Wrapper {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={204}
      height={204}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={18}
        fill="none"
        stroke="#1d0e0b"
        strokeDasharray="84.82300164692441 30.274333882308138"
        strokeWidth={2}
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  </Styled.Wrapper>
);
