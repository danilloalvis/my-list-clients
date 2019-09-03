import {Axios} from '../axios-config';

const list = () => {
  return Axios.get(`customers`);
};

export default {list};
