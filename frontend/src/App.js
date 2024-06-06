import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
