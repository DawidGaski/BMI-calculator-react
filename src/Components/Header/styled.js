import styled from "styled-components";

export const Header = styled.header`
  padding: 32px;
  max-width: 1080px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.thunderBird};
  color: ${({ theme }) => theme.color.white};
`;

export const Headline = styled.h1`
  font-size: 64px;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
`;
