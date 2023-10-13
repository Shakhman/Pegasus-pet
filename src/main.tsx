import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { store } from './store/index.ts';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
