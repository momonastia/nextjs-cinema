import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { asPath, route, pathname } = router;

  if (pathname === "/films" || pathname === "/") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
