import styled from "styled-components";

export const MessagesContainer = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.lg};
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
`