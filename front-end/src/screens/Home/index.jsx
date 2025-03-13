import { useContext } from "react";
import { Container, UserGrid } from "./styles";
import { UserContext } from "../../Context/context";
import CardUser from "../../components/CardUser";

const Home = () => {
  const {data} = useContext(UserContext);

  return (
    <Container>
      <UserGrid>
        {data.map((user) => (
          <CardUser
            key={user.id_user}
            id={user.id_user}
            name={user.name}
            email={user.email}
            cpf={user.cpf}
            dateOfBirth={user.dateOfBirth}
          />
        ))}
      </UserGrid>
    </Container>
  );
};

export default Home;
