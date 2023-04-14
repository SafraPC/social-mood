import React, { useContext } from 'react';
import { Page } from '../../components/Page';
import { UserContext } from '../../contexts/user';
import { nowAccomplishment } from '../../utils/nowAccomplishment';
import { HomeController } from './Home.controller';
import {
   Button,
   ButtonText,
   Container,
   Section,
   SectionTitle,
   Subtitle,
   Title,
} from './Home.styles';

const HomeView: React.FC<HomeController> = ({ id }) => {
   const { user } = useContext(UserContext);
   return (
      <Page>
         <Container>
            <Title>{`${nowAccomplishment()}, ${user.nickname}!`}</Title>
            <Subtitle>
               Aqui, você pode checar sugestões de posts e status!
            </Subtitle>
            <Section>
               <SectionTitle>Sugestões de POSTS</SectionTitle>
               <Button>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
            </Section>
            <Section>
               <SectionTitle>Sugestões de REELS</SectionTitle>
               <Button>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
            </Section>
            <Section>
               <SectionTitle>Sugestões de STATUS</SectionTitle>
               <Button>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
            </Section>
            <Section>
               <SectionTitle>CONSELHOS</SectionTitle>
               <Button>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
            </Section>
         </Container>
      </Page>
   );
};

export { HomeView };
