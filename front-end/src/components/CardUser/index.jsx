import { useNavigate } from "react-router-dom";
import {
  ActionButton,
  UserCard,
  UserDetail,
  UserInfo,
  UserName,
  UserTrash,
} from "./styles";
import { formatCPF, formatDate } from "../../utils/validation";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const CardUser = ({ id, name, email, cpf, dateOfBirth }) => {
  const navigate = useNavigate("");

  return (
    <UserCard key={id}>
      <UserTrash onClick={() => alert("User deleted")}>
        <FaRegTrashAlt size={20}/>
      </UserTrash>
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
      <ActionButton onClick={() => navigate(`/edit/${id}`)}><GoPencil size={17}/>Edit</ActionButton>
    </UserCard>
  );
};

export default CardUser;
