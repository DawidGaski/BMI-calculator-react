import styled from "styled-components";

export const Header = styled.header`
  padding: 32px;
  max-width: 1080px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.thunderBird};
  color: ${({ theme }) => theme.color.white};
  box-shadow: 1px 0px 1px 2px ${({ theme }) => theme.color.fiord};
`;

export const Headline = styled.h1`
  font-size: 64px;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
`;
