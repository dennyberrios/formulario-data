import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser";
import { Container, UserGrid } from "./styles";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get("http://localhost:3000/users/search");
      const data = response.data;
      setUsers(data.result)
    }
    getUsers();
  }, [users]);

  return (
    <Container>
      <UserGrid>
        {users.map((user) => (
          <CardUser
            key={user.id_user}
            id={user.id}
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
