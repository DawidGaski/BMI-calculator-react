import styled from "styled-components";

export const Form = styled.form`
  padding: 8px 16px;
  border-radius: 10px;
  border: solid 2px ${({ theme }) => theme.color.thunderBird};
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  margin: 16px;
  font-size: 24px;
`;

export const Input = styled.input`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  font-size: 40px;
  border: solid 2px ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.thunderBird};
`;
