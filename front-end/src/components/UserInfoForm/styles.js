import styled from "styled-components"
import { theme } from "../UI/Theme/theme"

export const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: 0.95rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${function(props) {return props.$hasError ? props.theme.colors.error : "#ddd"}};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${function (props) {return props.$hasError ? props.theme.colors.error : props.theme.colors.primary}};
  }
`


export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: 0.85rem;
`

export const ButtonGroup = styled.div`
  display: flex;
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
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  flex: 1;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

export const CancelButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.text};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  flex: 1;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &:hover {
    background-color: #f1f1f1;
  }
`