import React from 'react';
import { GPTResponse } from '../../Home.service';
import { Container, Description, Title } from './styles';

interface CardProps {
   item: GPTResponse;
}

const Card: React.FC<CardProps> = ({ item }) => {
   const { data, error } = item;

   return (
      <Container>
         <Title error={error}>{data.title}</Title>
         <Description>{data.description}</Description>
      </Container>
   );
};

export { Card };
