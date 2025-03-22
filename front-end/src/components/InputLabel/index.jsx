import { ErrorMessage, FormGroup, Input, Label } from "./styles";

const InputLabel = ({
  label,
  inputId,
  inputName,
  type,
  value,
  change,
  errors,
  maxLength,
  placeholder,
  ...props
}) => {
  return (
    <FormGroup>
      <Label htmlFor={inputName}>{label}</Label>
      <Input
        type={type}
        id={inputId}
        name={inputName}
        value={value}
        onChange={change}
        $hasError={!!errors}
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
      />
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </FormGroup>
  );
};

export default InputLabel;
