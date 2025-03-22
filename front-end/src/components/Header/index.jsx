import { Button, ButtonGroup, ContentHeader, Title } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");

  return (
    <ContentHeader>
      <Title>Sistema de gestão de usuários</Title>
      <ButtonGroup>
        <Button onClick={() => navigate("/register")}>New User</Button>
        <Button onClick={() => navigate("/")}>Logout</Button>
      </ButtonGroup>
    </ContentHeader>
  );
};

export default Header;
