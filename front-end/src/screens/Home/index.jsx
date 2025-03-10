import CardUser from '../../components/CardUser';
import { Container, UserGrid } from './styles'

const Home = () => {
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

  return (
    <Container>
      <UserGrid>
        {users.map((user) => (
          <CardUser
            key={user.id}
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
