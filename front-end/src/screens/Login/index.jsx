import { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  FormContainer,
  Title,
} from "./styles";
import { UserContext } from "../../Context/context";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validation";
import InputLabel from "../../components/InputLabel";

const Login = () => {
    const navigate = useNavigate();
    const { setReloadLayout, reloadLayout } = useContext(UserContext);
  
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      // Remove erro individual ao corrigir o campo
      const fieldError = validateField(name, value);
      setErrors({ ...errors, [name]: fieldError });
    };
  
    const validateField = (name, value) => {
      switch (name) {
        case "email":
          return validateEmail(value);
        case "password":
          return validatePassword(value);
        default:
          return null;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.email || !formData.password) {
        setErrors({
          email: validateEmail(formData.email),
          password: validatePassword(formData.password),
        });
        return;
      }
  
      // Simulação de login bem-sucedido
      console.log("✅ Login realizado com:", formData);
  
      // Aqui poderia chamar um serviço de autenticação
      setReloadLayout(!reloadLayout);
      navigate("/home");
    };

  return (
<Container>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputLabel
            label={"E-mail"}
            type={"email"}
            placeholder={"exemplo@gmail.com"}
            inputId={"email"}
            inputName={"email"}
            change={handleChange}
            value={formData.email}
            errors={errors.email}
          />
          <InputLabel
            label={"Senha"}
            type={"password"}
            placeholder={"••••••••••"}
            inputId={"password"}
            inputName={"password"}
            change={handleChange}
            value={formData.password}
            errors={errors.password}
          />

          <ButtonGroup>
            <Button type="submit">Entrar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
