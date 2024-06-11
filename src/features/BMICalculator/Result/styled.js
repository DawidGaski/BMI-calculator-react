import styled from "styled-components";

export const StyledResult = styled.p`
  margin: 16px;
  padding-top: 8px;
  font-size: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-top: 4px;
    font-size: 16px;
    margin: 8px;
  }
`;
