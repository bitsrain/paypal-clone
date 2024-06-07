import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LocalizationProvider } from 'localize-react';
import store from './store';
import AppRouter from "./router";
import localeDict from './locale';

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider translations={localeDict} locale="kk">
        <AppRouter />
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
