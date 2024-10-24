import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LocalizationProvider } from 'localize-react';
import { ConfigProvider } from 'antd';
import store from './store';
import AppRouter from "./router";
import localeDict from './locale';

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider translations={localeDict} locale="kk">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: 'rgb(0, 48, 135)', // not working
              },
            },
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
