import React from 'react';
import { GPTResponse } from '../../Home.service';

interface CardProps {
   item: GPTResponse;
}

const Card: React.FC<CardProps> = ({ item }) => {
   const { data, error } = item;

   return <></>;
};

export { Card };
