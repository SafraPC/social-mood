import { useCallback, useEffect, useState } from 'react';
import { MusicsDomain } from './aplication/Home.domain';

export interface HomeController {
   id: 0;
}

const homeController = (): HomeController => {
   return {
      id: 0,
   };
};

export { homeController };
