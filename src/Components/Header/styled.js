import styled from "styled-components";

export const Header = styled.header`
  padding: 16px;
  max-width: 1080px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.thunderBird};
  color: ${({ theme }) => theme.color.white};
`;

export const Headline = styled.h1`
  font-size: 32px;
  border-radius: 6px;
  box-shadow: 2px;
`;
