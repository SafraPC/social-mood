import React from 'react';
import { Container, EmptyText } from './styles';

interface EmptyProps {
   text?: string;
}

const Empty: React.FC<EmptyProps> = ({ text }) => {
   return (
      <Container>
         <EmptyText>{text || 'Nenhum dado foi encontrado!'}</EmptyText>
      </Container>
   );
};

export { Empty };
