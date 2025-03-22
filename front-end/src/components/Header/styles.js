import styled from "styled-components";
import { theme } from "../UI/Theme/theme";

export const ContentHeader = styled.header`
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;
