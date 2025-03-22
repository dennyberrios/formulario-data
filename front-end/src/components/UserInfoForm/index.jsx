import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormContainer,
  Title,
  Form,
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
import { UserContext } from "../../Context/context";
import InputLabel from "../InputLabel";

const UserInfoForm = () => {
  const navigate = useNavigate("");
  const { id } = useParams();
  const { getUserById, userCreate, userUpdate, setReloadLayout, reloadLayout } =
    useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    async function getUsersById() {
      const response = await getUserById(id);
      const data = response.result[0];
      if (id) {
        setFormData({
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          password: data.password,
          dateOfBirth: data.dateOfBirth.split("T")[0],
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      if (id) {
        const response = await userUpdate(id, formAttedDate);
        if (response.status) {
          navigate("/");
        } else {
          console.error("❌ Erro ao atualizar usuário:", response.message);
        }
      } else {
        userCreate(formAttedDate);
        navigate("/");
      }
      // Limpa o formulário após o envio
      setFormData({
        name: "",
        email: "",
        cpf: "",
        password: "",
        dateOfBirth: "",
      });
    } catch (error) {
      console.error(error);
    }

    setReloadLayout(!reloadLayout);
  };

  return (
    <FormContainer>
      <Title>{id ? "Update User" : "Register New User"}</Title>
      <Form onSubmit={handleSubmit}>
        <InputLabel
          label={"name"}
          type={"text"}
          inputId={"name"}
          inputName={"name"}
          change={handleChange}
          value={formData.name}
          errors={errors.name}
        />

        <InputLabel
          label={"Email"}
          type={"text"}
          inputId={"email"}
          inputName={"email"}
          change={handleChange}
          value={formData.email}
          errors={errors.email}
        />

        <InputLabel
          label={"cpf"}
          type={"text"}
          inputId={"cpf"}
          inputName={"cpf"}
          change={handleChange}
          value={formData.cpf}
          errors={errors.cpf}
          maxLength={11}
        />

        <InputLabel
          label={"password"}
          type={"text"}
          inputId={"password"}
          inputName={"password"}
          change={handleChange}
          value={formData.password}
          errors={errors.password}
        />

        <InputLabel
          label={"Date of Birth"}
          type={"date"}
          inputId={"dateOfBirth"}
          inputName={"dateOfBirth"}
          change={handleChange}
          value={formData.dateOfBirth}
          errors={errors.dateOfBirth}
        />

        <ButtonGroup>
          <Button type="submit">Register</Button>
          <CancelButton type="button" onClick={() => navigate("/home")}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default UserInfoForm;
