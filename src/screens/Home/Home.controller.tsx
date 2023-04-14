import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/user';
import {
   getAdvices,
   getNewPostSuggestions,
   getNewReelsSuggestions,
   getNewStatusSuggestions,
   GPTResponse,
} from './Home.service';

export interface HomeController {
   reels: GPTResponse[];
   status: GPTResponse[];
   advices: GPTResponse[];
   posts: GPTResponse[];
   refreshReels: () => void;
   refreshStatus: () => void;
   refreshPosts: () => void;
   refreshAdvices: () => void;
}

const homeController = (): HomeController => {
   const { user } = useContext(UserContext);
   const [reels, setReels] = useState<GPTResponse[]>([]);
   const [posts, setPosts] = useState<GPTResponse[]>([]);
   const [advsice, setAdvices] = useState<GPTResponse[]>([]);
   const [status, setStatus] = useState<GPTResponse[]>([]);

   const refreshReels = useCallback(async () => {
      const response = await getNewReelsSuggestions(user);
      setReels(prevState => [...prevState, response]);
   }, [user]);

   const refreshPosts = useCallback(async () => {
      const response = await getNewPostSuggestions(user);
      setPosts(prevState => [...prevState, response]);
   }, [user]);

   const refreshStatus = useCallback(async () => {
      const response = await getNewStatusSuggestions(user);
      setStatus(prevState => [...prevState, response]);
   }, [user]);

   const refreshAdvices = useCallback(async () => {
      const response = await getAdvices(user);
      setAdvices(prevState => [...prevState, response]);
   }, [user]);

   return {
      reels,
      status,
      advices: advsice,
      posts,
      refreshReels,
      refreshStatus,
      refreshPosts,
      refreshAdvices,
   };
};

export { homeController };
