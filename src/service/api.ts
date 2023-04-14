import axios from 'axios';

const api = axios.create({
   baseURL: 'https://api.openai.com/v1',
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GPT_KEY}`,
   },
});

export default api;
