import { Axios } from 'axios';
import * as API from '../api/api';

export type ExtraType = {
  client: Axios;
  api: typeof API;
};
