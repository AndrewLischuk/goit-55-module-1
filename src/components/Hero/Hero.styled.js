import styled, { css } from "styled-components";

const fontSizeLevels = {
  1: 36,
  2: 32,
  3: 28,
  4: 20,
  5: 16,
};
const getHeadStyles = (level = 1) => {
  return fontSizeLevels[level] + "px";
};
export const Title = styled.h1`
  font-size: ${(props) => getHeadStyles(props.level)};
`;

export const Lable = styled.div`
  font-size: 20px;
  color: red;
`;

export const Description = styled.p`
  font-size: 20px;
`;
