import React, { useState } from 'react';
import { GPTResponse } from '../../Home.service';
import { Container, Description, Title } from './styles';
import { MotiView } from 'moti';
import { successToast } from '../../../../utils/toast';
import { setStringAsync } from 'expo-clipboard';
interface CardProps {
   item: GPTResponse;
}

const Card: React.FC<CardProps> = ({ item }) => {
   const { data, error } = item;
   const [isPressed, setIsPressed] = useState(false);

   const handlePress = async () => {
      setIsPressed(true);
      setTimeout(() => {
         setIsPressed(false);
      }, 50);
      await setStringAsync(data.description);
      successToast({
         message: 'O conteúdo foi copiado para a área de transferência!',
      });
   };

   return (
      <MotiView
         from={{ scale: 1 }}
         animate={{ scale: isPressed ? 0.5 : 1 }}
         transition={{ type: 'spring' }}>
         <Container onPress={handlePress}>
            <Title error={error}>{data.title}</Title>
            <Description>{data.description}</Description>
         </Container>
      </MotiView>
   );
};

export { Card };
