import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  max-width: 1080px;
  background: ${({ theme }) => theme.color.iron};
  border-radius: 12px;
  display: grid;
  justify-content: center;
`;
