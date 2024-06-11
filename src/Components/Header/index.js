import styled from "styled-components";

export const Header = styled.header`
  max-width: 1080px;
  background: ${({ theme }) => theme.color.thunderBird};
  color: ${({ theme }) => theme.color.white};
`;

export const Headline = styled.h1`
  font-size: 20px;
  border-radius: 6px;
  box-shadow: 2px;
`;
