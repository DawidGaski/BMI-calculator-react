import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  margin: 2px;
  padding: 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.concrete};
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
`;
