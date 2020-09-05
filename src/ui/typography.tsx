import styled from "@emotion/styled";

export namespace Typography {
  const a = -0.0223;
  const b = 0.185;
  const c = -0.1745;

  export const getTracking = (fontSize: number) => {
    return (a + b * Math.pow(Math.E, c * fontSize)).toFixed(3) + "em";
  };

  export const Medium = styled.span`
    font-size: 16px;
    letter-spacing: ${getTracking(16)};
  `;
}
