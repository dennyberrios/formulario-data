import { Button, ContentHeader, Title } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" && (
        <ContentHeader>
          <Title>Sistema de gestão de usuários</Title>
          <Button onClick={() => navigate("/register")}>New User</Button>
        </ContentHeader>
      )}
    </>
  );
};

export default Header;
