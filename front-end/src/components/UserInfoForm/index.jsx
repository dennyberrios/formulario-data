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

    // Formatação do CPF (XXX.XXX.XXX-XX)
    if (name === "cpf") {
      value = value.replace(/\D/g, ""); // Remove não numéricos
      if (value.length <= 3) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
      } else if (value.length <= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
      } else if (value.length <= 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // CPF validation
    const rawCpf = formData.cpf.replace(/\D/g, ""); // Remove pontuações
    if (!rawCpf) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (rawCpf.length !== 11) {
      newErrors.cpf = "CPF deve conter 11 dígitos";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    // Date of Birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Data de nascimento é obrigatória";
    } else {
      const [day, month, year] = formData.dateOfBirth.split("/");
      const birthDate = new Date(`${year}-${month}-${day}`);
      if (isNaN(birthDate)) {
        newErrors.dateOfBirth = "Data de nascimento inválida";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulário válido:", formData);
      // Aqui você pode chamar a API para enviar os dados
    }
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
