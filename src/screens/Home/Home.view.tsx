import React from 'react';
import { Page } from '../../components/Page';
import { nowAccomplishment } from '../../utils/nowAccomplishment';
import { HorizontalList } from './components/HorizontalList';
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

const HomeView: React.FC<HomeController> = ({
   advices,
   posts,
   reels,
   refreshAdvices,
   refreshPosts,
   refreshReels,
   refreshStatus,
   status,
   user,
}) => {
   return (
      <Page>
         <Container>
            <Title>{`${nowAccomplishment()}, ${user.nickname}!`}</Title>
            <Subtitle>
               Aqui, você pode checar sugestões de posts e status!
            </Subtitle>
            <Subtitle>Pressione no card para copiar seu conteúdo!</Subtitle>

            <Section>
               <SectionTitle>Sugestões de POSTS</SectionTitle>
               <Button onPress={refreshPosts} disabled={posts.loading}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               <HorizontalList
                  data={posts.data}
                  emptyMessage="Você não tem possui sugestões de posts!"
                  loading={posts.loading}
               />
            </Section>
            <Section>
               <SectionTitle>Sugestões de REELS</SectionTitle>
               <Button onPress={refreshReels} disabled={reels.loading}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               <HorizontalList
                  data={reels.data}
                  emptyMessage="Você não tem possui sugestões de reels!"
                  loading={reels.loading}
               />
            </Section>
            <Section>
               <SectionTitle>Sugestões de STATUS</SectionTitle>
               <Button onPress={refreshStatus} disabled={status.loading}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               <HorizontalList
                  data={status.data}
                  loading={status.loading}
                  emptyMessage="Você não tem possui sugestões de status!"
               />
            </Section>
            <Section>
               <SectionTitle>CONSELHOS</SectionTitle>
               <Button onPress={refreshAdvices} disabled={advices.loading}>
                  <ButtonText>Pressione para gerar</ButtonText>
               </Button>
               <HorizontalList
                  data={advices.data}
                  emptyMessage="Você não tem possui conselhos!"
                  loading={advices.loading}
               />
            </Section>
         </Container>
      </Page>
   );
};

export { HomeView };
