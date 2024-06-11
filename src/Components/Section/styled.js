import styled from "styled-components";

export const Section = styled.section`
  padding: 10px;
  max-width: 1080px;
  background: ${({ theme }) => theme.color.iron};
  box-shadow: 2px;
  border-radius: 6px;
  display: grid;
  justify-content: center;
`;
