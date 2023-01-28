import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { wrapper, store, persistor } from "../store/store";
import { RouteGuard } from "../components/custom/RouteGuard";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div id="spinner" className=""></div>
        <Layout>
          <RouteGuard>
          <Head>
            <title>My1000+ | Invest in hig returns</title>
            <meta name="description" content="My1000+ | Invest in hig returns" />
            <link rel="icon" href="/logo.jpg" />
          </Head>
            <Component {...pageProps} />
          </RouteGuard>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
