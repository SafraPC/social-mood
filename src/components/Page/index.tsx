import React from 'react';
import { Container } from './styles';

interface PageProps {
   children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
   return <Container>{children}</Container>;
};

export { Page };
