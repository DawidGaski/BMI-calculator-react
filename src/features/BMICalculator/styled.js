import styled from "styled-components";

export const Form = styled.form`
  padding: 8px 16px;
  border-radius: 10px;
  border: solid 2px ${({ theme }) => theme.color.thunderBird};
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    border-radius: 5px;
  }
`;

export const Paragraph = styled.p`
  margin: 16px;
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin: 8px;
  }
`;

export const Input = styled.input`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  font-size: 40px;
  border: solid 2px ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.thunderBird};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
  }
`;

export const Result = styled.div`
  width: 320px;
  height: 160px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 160px;
    height: 80px;
  }
`;
