import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import { composeWithDevTools } from "redux-devtools-extension";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
