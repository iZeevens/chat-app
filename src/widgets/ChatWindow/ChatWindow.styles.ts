import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.backgrounds.background};
  border-radius: ${({theme}) => theme.borderRadius.xl};
  position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  height: 100%;
`

export const Messages = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.lg};
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`