import styled, { css } from "styled-components";

//////////////////////////
const test = css`
  text-transform: uppercase;
`;

//////////////////////////
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 60px;
      color: var(--color-blue-100);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 40px;
      color: var(--color-red-700);
    `}


  ${test}
`;

export default Heading;
