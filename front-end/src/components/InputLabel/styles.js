import styled from "styled-components"
import { theme } from "../UI/Theme/theme"

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