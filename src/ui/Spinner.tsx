import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const DURATION = "1.4s";
const OFFSET = 187;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const colors = keyframes`
0% { stroke: #ddd; }
	50% { stroke: #aaa; }
  100% { stroke: #ddd; }
`;

const dash = keyframes`
0% { stroke-dashoffset: ${OFFSET}; }
 50% {
   stroke-dashoffset: ${OFFSET / 4};
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: ${OFFSET};
   transform:rotate(450deg);
 }
`;

const SVG = styled.svg`
  width: 20px;
  height: 20px;
  animation: ${rotator} ${DURATION} linear infinite;
`;

const Circle = styled.circle`
  stroke-width: 8px;
  stroke-dasharray: ${OFFSET};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${DURATION} ease-in-out infinite,
    ${colors} ${DURATION} ease-in-out infinite;
`;

const Spinner = () => {
  return (
    <SVG viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <Circle fill="none" strokeLinecap="round" cx="33" cy="33" r="30" />
    </SVG>
  );
};

export default Spinner;
