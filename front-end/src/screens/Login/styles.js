import styled from "styled-components"
import { theme } from "../../components/UI/Theme/theme"

export const Container = styled.section`
  width: 100%;
  height: 100vh;
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

export const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  width: 100%;
  max-width: 27rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`

export const Title = styled.h1`
  color: ${theme.colors.primary};
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 2rem;
  padding: 0.50rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  flex: 1;
  transition: background-color 0.2s ease;
  max-width: 13rem;
  
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`