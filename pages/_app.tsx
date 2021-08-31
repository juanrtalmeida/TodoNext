import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Provider as NextAuthProvider } from "next-auth/client";
import Header from "../components/Header";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
