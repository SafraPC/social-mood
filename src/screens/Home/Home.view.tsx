import React, { useContext } from 'react';
import { Page } from '../../components/Page';
import { UserContext } from '../../contexts/user';
import { nowAccomplishment } from '../../utils/nowAccomplishment';
import { HomeController } from './Home.controller';
import {
   Button,
   ButtonText,
   Card,
   CardDescription,
   CardTitle,
   Container,
   Section,
   SectionTitle,
   Subtitle,
   Title,
} from './Home.styles';

const HomeView: React.FC<HomeController> = ({
   advices,
   posts,
   reels,
   refreshAdvices,
   refreshPosts,
   refreshReels,
   refreshStatus,
   status,
}) => {
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
               <Button onPress={refreshPosts}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               {posts.map((post, index) => (
                  <Card key={index.toString()}>
                     <CardTitle>{post.data.title}</CardTitle>
                     <CardDescription>{post.data.description}</CardDescription>
                  </Card>
               ))}
            </Section>
            <Section>
               <SectionTitle>Sugestões de REELS</SectionTitle>
               <Button onPress={refreshReels}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               {reels.map((post, index) => (
                  <Card key={index.toString()}>
                     <CardTitle>{post.data.title}</CardTitle>
                     <CardDescription>{post.data.description}</CardDescription>
                  </Card>
               ))}
            </Section>
            <Section>
               <SectionTitle>Sugestões de STATUS</SectionTitle>
               <Button onPress={refreshStatus}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               {status.map((post, index) => (
                  <Card key={index.toString()}>
                     <CardTitle>{post.data.title}</CardTitle>
                     <CardDescription>{post.data.description}</CardDescription>
                  </Card>
               ))}
            </Section>
            <Section>
               <SectionTitle>CONSELHOS</SectionTitle>
               <Button onPress={refreshAdvices}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               {advices.map((post, index) => (
                  <Card key={index.toString()}>
                     <CardTitle>{post.data.title}</CardTitle>
                     <CardDescription>{post.data.description}</CardDescription>
                  </Card>
               ))}
            </Section>
         </Container>
      </Page>
   );
};

export { HomeView };
