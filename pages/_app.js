import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import ThemeConfig from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeConfig>
  );
}

export default MyApp;
