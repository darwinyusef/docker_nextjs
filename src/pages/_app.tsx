import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';

//...
import { Provider } from 'react-redux';
import { store } from '../app/store';

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page );

  return getLayout( 
    <Provider store={store}> 
      <Component {...pageProps} /> 
    </Provider>
  )
}

export default MyApp