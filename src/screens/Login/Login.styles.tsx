import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
   contentContainerStyle: {
      flexGrow: 1,
      padding: 10,
   },
})``;

export const Title = styled.Text`
   font-size: 18px;
   color: ${({ theme }) => theme.colors.white};
   font-weight: bold;
   margin-bottom: 50px;
   margin-top: 30px;
   text-align: center;
`;

export const Submit = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.darkGreen};
   padding: 16px;
   border-radius: 4px;
   margin-top: 20px;
`;

export const SubmitText = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 15px;
   text-align: center;
   font-weight: bold;
`;

export const Error = styled.Text`
   color: ${({ theme }) => theme.colors.darkRed};
   font-size: 15px;
   text-align: center;
   font-weight: bold;
   margin-top: 20px;
`;
