import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { Apollo } from '../apollo/Apollo';
import React, { Suspense, useEffect, useState } from 'react';
import { Editor } from '@nox-engine/nox-engine-editor-ui';


function CustomApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <>Loading</>;
  } else {
    return (
      <>
        <Head>
          <title>Welcome to nox-engine-editor!</title>
        </Head>
        <main className='app'>
          <RecoilRoot>
            <Suspense fallback={<Editor.Preloader></Editor.Preloader>}>
              <ApolloProvider client={Apollo}>
                <Component {...pageProps} />
              </ApolloProvider>
            </Suspense>
          </RecoilRoot>
        </main>
      </>
    );
  }
}

export default CustomApp;
