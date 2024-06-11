import styled from "styled-components";

export const Container = styled.div`
  max-width: 1216px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.concrete};
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: stretch;
`;
