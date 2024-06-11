import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  max-width: 1080px;
  background: ${({ theme }) => theme.color.iron};
  border-radius: 12px;
  box-shadow: 1px 0px 1px 2px ${({ theme }) => theme.color.fiord};
  display: grid;
  justify-content: center;
`;
