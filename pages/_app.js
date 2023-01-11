import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { Provider } from "react-redux";
import { wrapper, store, persistor } from "../store/store";
import { RouteGuard } from "../components/custom/RouteGuard";
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
      <div id="spinner" class=""></div>
      <Layout>
        <RouteGuard>
        <Component {...pageProps} />
        </RouteGuard>
      </Layout>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
