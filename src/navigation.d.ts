import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from './navigation/types';

type NavigationType = StackNavigationProp<AppRoutes>;

declare global {
   namespace ReactNavigation {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface RootParamList extends AppRoutes {}
   }
}
