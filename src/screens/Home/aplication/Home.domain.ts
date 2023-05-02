import { GPTResponse } from '../Home.service';

export interface GPTDomain {
   data: GPTResponse[];
   loading: boolean;
}
