import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
   StyleProp,
   TextInput,
   TextInputProps,
   ViewStyle,
   Keyboard,
} from 'react-native';
import { useTheme } from 'styled-components';
import {
   Container,
   InputText,
   Content,
   Label,
   ErrorText,
   PasswordButton,
   RequiredText,
   RowContainer,
   Highlight,
   BottomText,
} from './styles';

export interface InputProps extends TextInputProps {
   error?: string;
   style?: StyleProp<ViewStyle>;
   Icon?: ReactElement;
   password?: boolean;
   bottomText?: string;
   highlight?: string;
   label?: string;
   options?: any;
   required?: boolean;
}

const Input = ({
   Icon,
   style,
   error,
   label,
   password,
   options,
   onBlur,
   required,
   highlight,
   bottomText,
   value,
   ...rest
}: InputProps) => {
   const { colors } = useTheme();
   const [focused, setFocused] = useState(false);
   const [showPassword, setShowPassword] = useState(!password);
   const inputRef = useRef<TextInput>(null);
   const maskedInputRef = useRef<any>(null);

   useEffect(() => {
      Keyboard.addListener('keyboardDidHide', () => {
         inputRef.current?.blur();
         maskedInputRef?.current?.getElement()?.blur();
      });
   });

   const handleKeyboard = () => {
      inputRef.current?.focus();
   };

   const togglePassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <Container onPress={handleKeyboard} activeOpacity={1} style={style}>
         <RowContainer>
            {!!label && <Label>{label}</Label>}
            {required && <RequiredText> *</RequiredText>}
         </RowContainer>

         <Content focused={focused} error={!!error}>
            {Icon}

            <InputText
               {...rest}
               ref={inputRef}
               placeholderTextColor={colors.gray}
               onFocus={() => setFocused(true)}
               onBlur={e => {
                  setFocused(false);
                  onBlur?.(e);
               }}
               secureTextEntry={!showPassword}
            />

            {password && (
               <PasswordButton onPress={togglePassword}>
                  <Feather
                     name={showPassword ? 'eye-off' : 'eye'}
                     size={20}
                     color={colors.darkElements}
                  />
               </PasswordButton>
            )}
            {highlight && <Highlight>{highlight}</Highlight>}
         </Content>
         {!!error && <ErrorText>{error}</ErrorText>}
         {!!bottomText && <BottomText>{bottomText}</BottomText>}
      </Container>
   );
};

export default Input;
