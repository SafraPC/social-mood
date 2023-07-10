import Toast from 'react-native-toast-message';

interface ToastProps {
   message: string;
   description?: string;
   time?: number;
}

const successToast = ({ message, description, time = 3000 }: ToastProps) => {
   Toast.show({
      autoHide: true,
      visibilityTime: time,
      position: 'top',
      type: 'success',
      text1: message,
      text2: description,
   });
};

const errorToast = ({ message, description, time = 3000 }: ToastProps) => {
   Toast.show({
      autoHide: true,
      visibilityTime: time,
      position: 'top',
      type: 'error',
      text1: message,
      text2: description,
   });
};

export { successToast, errorToast };
