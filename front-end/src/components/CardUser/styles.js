import styled from "styled-components"
import { theme } from "../UI/Theme/theme"

export const UserCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export const UserInfo = styled.div`
  flex: 1;
  margin-bottom: 1rem;
`

export const UserName = styled.h2`
  color: ${theme.colors.primary};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`

export const UserDetail = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  
  strong {
    color: ${theme.colors.secondary};
  }
`

export const ActionButton = styled.button`
  background-color: ${theme.colors.tertiary};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  align-self: flex-end;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`