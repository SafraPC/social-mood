import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/user';
import {
   getAdvices,
   getNewPostSuggestions,
   getNewReelsSuggestions,
   getNewStatusSuggestions,
} from './Home.service';

export interface HomeController {
   id: 0;
}

const homeController = (): HomeController => {
   const { user } = useContext(UserContext);

   return {
      id: 0,
   };
};

export { homeController };
