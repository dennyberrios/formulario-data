import { MessageContainer, SubText, Text, Title } from "./styles";

const NotFoundMessage = () => {
    return (
      <MessageContainer>
        <Title>Ops, não conseguimos encontrar usuários no momento!</Title>
        <Text>
          Isso pode acontecer se o banco de dados estiver fora do ar ou se ainda não houver dados cadastrados.
        </Text>
        <SubText>
          Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir.
        </SubText>
      </MessageContainer>
    );
  };
  
  export default NotFoundMessage;