import React from 'react';
import { Page } from '../../components/Page';
import { Container, ErrorText, Loading } from './styles';

interface AppNotReadyProps {
   loading: boolean;
}
const AppNotReady: React.FC<AppNotReadyProps> = ({ loading }) => {
   return (
      <Page>
         <Container>
            {loading ? (
               <Loading />
            ) : (
               <ErrorText>
                  Houve um erro ao configurar o aplicativo, tente novamente mais
                  tarde.
               </ErrorText>
            )}
         </Container>
      </Page>
   );
};

export { AppNotReady };
