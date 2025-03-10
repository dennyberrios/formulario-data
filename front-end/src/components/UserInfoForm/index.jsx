import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  ButtonGroup,
  Button,
  CancelButton,
} from "./styles";
import {
  cleanCPF,
  formatCPF,
  validateCPF,
  validateDateOfBirth,
  validateEmail,
  validateForm,
  validateName,
  validatePassword,
} from "../../utils/validation";

const UserInfoForm = () => {
  const navigate = useNavigate("");
  const { id } = useParams();

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      cpf: "12345678901",
      password: "password123",
      dateOfBirth: "1990-01-01",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      cpf: "10987654321",
      password: "password456",
      dateOfBirth: "1992-05-15",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    function getUsersById() {
      const index = id -1;
      if (id) {
        setFormData({
          name: users[index].name,
          email: users[index].email,
          cpf: users[index].cpf,
          password: users[index].password,
          dateOfBirth: users[index].dateOfBirth,
        });
      }
    }
    getUsersById();
  }, [id]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "cpf") {
      value = cleanCPF(value); // Remove pontos e traço
      value = formatCPF(value); // Aplica a máscara corretamente
    }

    setFormData({ ...formData, [name]: value });

    // Validação do campo alterado, para remover erros individuais
    const fieldError = validateField(name, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  // Função para validar campo individual
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "cpf":
        return validateCPF(value);
      case "password":
        return validatePassword(value);
      case "dateOfBirth":
        return validateDateOfBirth(value);
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📌 formData no handleSubmit:", formData);

    if (!formData || Object.keys(formData).length === 0) {
      console.error("❌ Erro: formData está vazio ou indefinido");
      return;
    }

    // Realiza a validação e armazena os erros
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      console.warn("⚠️ Erros de validação:", validationErrors);
      setErrors(validationErrors);
      return; // Se houver erros, interrompe o envio
    }

    // Remove a formatação do CPF antes de enviar
    const formAttedDate = {
      ...formData,
      cpf: cleanCPF(formData.cpf),
    };

    console.log("✅ Formulário válido:", formAttedDate);
    navigate("/");
    // Limpa o formulário após o envio
    setFormData({
      name: "",
      email: "",
      cpf: "",
      password: "",
      dateOfBirth: "",
    });
  };

  return (
    <FormContainer>
      <Title>{id ? "Update User" : "Register New User"}</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            $hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            $hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            maxLength={11}
            $hasError={!!errors.cpf}
          />
          {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            $hasError={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            $hasError={!!errors.dateOfBirth}
          />
          {errors.dateOfBirth && (
            <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>
          )}
        </FormGroup>

        <ButtonGroup>
          <Button type="submit">Register</Button>
          <CancelButton type="button" onClick={() => navigate("/")}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default UserInfoForm;
