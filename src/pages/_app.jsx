import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { wrapper } from '../services/redux/store';

const App = ({ Component, ...pageProps }) => {
  ///Redux ToolKit
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
:root {
  --black: #212121;
  --white: #eee;
  --yellowGrad: linear-gradient(-45deg, #ffff00, #ffc700);
  --greyGrad: linear-gradient(-45deg, white, #ddd);
  --blackShadow: 0px 0px 10px #212121;
  --grey: #ddd;
  --transition: 0.25s;
}
`;
