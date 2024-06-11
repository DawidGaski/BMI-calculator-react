import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  max-width: 1080px;
  background: ${({ theme }) => theme.color.iron};
  border-radius: 12px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: 1px 0px 10px 3px ${({ theme }) => theme.color.fiord};
  display: grid;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
    border-radius: 6px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;
