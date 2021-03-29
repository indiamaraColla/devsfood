import { createContext } from 'react';

const storeContext = createContext({
  token: '',
  setToken: () => {},
});

export default storeContext;
