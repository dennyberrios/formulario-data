import { useNavigate } from "react-router-dom";
import {
  ActionButton,
  UserCard,
  UserDetail,
  UserInfo,
  UserName,
} from "./styles";

const CardUser = ({ id, name, email, cpf, dateOfBirth }) => {
  const navigate = useNavigate("");

  const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <UserCard key={id}>
      <UserInfo>
        <UserName>{name}</UserName>
        <UserDetail>
          <strong>Email:</strong> {email}
        </UserDetail>
        <UserDetail>
          <strong>CPF:</strong> {formatCPF(cpf)}
        </UserDetail>
        <UserDetail>
          <strong>Date of Birth:</strong> {formatDate(dateOfBirth)}
        </UserDetail>
      </UserInfo>
      <ActionButton onClick={() => navigate(`/edit/${id}`)}>Edit</ActionButton>
    </UserCard>
  );
};

export default CardUser;
