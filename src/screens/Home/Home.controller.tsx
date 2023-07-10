import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/user';
import { GPTDomain } from './aplication/Home.domain';
import {
   getAdvices,
   getNewPostSuggestions,
   getNewReelsSuggestions,
   getNewStatusSuggestions,
} from './Home.service';
import { UserDTO } from '../Login/application/Login.dto';

export interface HomeController {
   reels: GPTDomain;
   status: GPTDomain;
   advices: GPTDomain;
   posts: GPTDomain;
   refreshReels: () => void;
   refreshStatus: () => void;
   refreshPosts: () => void;
   refreshAdvices: () => void;
   user: UserDTO;
}

const HomeController = (): HomeController => {
   const { user } = useContext(UserContext);
   const [reels, setReels] = useState<GPTDomain>({
      data: [],
      loading: false,
   });
   const [posts, setPosts] = useState<GPTDomain>({
      data: [],
      loading: false,
   });
   const [advsice, setAdvices] = useState<GPTDomain>({
      data: [],
      loading: false,
   });
   const [status, setStatus] = useState<GPTDomain>({
      data: [],
      loading: false,
   });

   const refreshReels = useCallback(async () => {
      try {
         setReels(prevState => ({ ...prevState, loading: true }));
         const response = await getNewReelsSuggestions(user);
         setReels(prevState => ({
            ...prevState,
            data: [...prevState.data, response],
         }));
      } finally {
         setReels(prevState => ({ ...prevState, loading: false }));
      }
   }, [user]);

   const refreshPosts = useCallback(async () => {
      try {
         setPosts(prevState => ({ ...prevState, loading: true }));
         const response = await getNewPostSuggestions(user);
         setPosts(prevState => ({
            ...prevState,
            data: [...prevState.data, response],
         }));
      } finally {
         setPosts(prevState => ({ ...prevState, loading: false }));
      }
   }, [user]);

   const refreshStatus = useCallback(async () => {
      try {
         setStatus(prevState => ({ ...prevState, loading: true }));
         const response = await getNewStatusSuggestions(user);
         setStatus(prevState => ({
            ...prevState,
            data: [...prevState.data, response],
         }));
      } finally {
         setStatus(prevState => ({ ...prevState, loading: false }));
      }
   }, [user]);

   const refreshAdvices = useCallback(async () => {
      try {
         setAdvices(prevState => ({ ...prevState, loading: true }));
         const response = await getAdvices(user);
         setAdvices(prevState => ({
            ...prevState,
            data: [...prevState.data, response],
         }));
      } finally {
         setAdvices(prevState => ({ ...prevState, loading: false }));
      }
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
      user,
   };
};

export { HomeController };
