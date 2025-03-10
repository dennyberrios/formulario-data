import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
    min-height: auto;
  }
`