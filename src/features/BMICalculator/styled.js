import styled from "styled-components";

export const Form = styled.form`
  padding: 4px;
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.color.thunderBird};
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  margin: 8px;
  font-size: 16px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Input = styled.input`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  border: solid 1px ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.thunderBird};
`;
