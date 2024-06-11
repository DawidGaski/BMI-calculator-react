import styled from "styled-components";

export const Container = styled.div`
  margin: 4px;
  padding: 20px;
  border-radius: 24px;
  background: ${({ theme }) => theme.color.concrete};
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
`;
