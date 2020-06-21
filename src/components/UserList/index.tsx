import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponivel - 2 </Role>
      <UserRow nickname="Felipe Bello" />
      <UserRow nickname="Bot do Servidor" isBot />

      <Role> Offline - 6 </Role>
      <UserRow nickname="User 1" />
      <UserRow nickname="User 2" />
      <UserRow nickname="User 3" />
      <UserRow nickname="User 4" />
      <UserRow nickname="User 5" />
      <UserRow nickname="User 6" />
    </Container>
  );
}

export default UserList;
