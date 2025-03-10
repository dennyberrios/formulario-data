import styled from "styled-components";
import { theme } from "../../components/UI/Theme/theme";

export const Container = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`