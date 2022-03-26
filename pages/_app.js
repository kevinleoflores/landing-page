import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import ThemeConfig from "../components/theme";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeConfig>
    </Provider>
  );
}

export default MyApp;
