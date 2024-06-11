import styled from "styled-components";

export const End = styled.section`
  max-width: 1080px;
  background: ${({ theme }) => theme.color.thunderBird};
  box-shadow: 2px;
  border-radius: 6px;
`;

export const Result = styled.p`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`;
