import type { AppProps } from "next/app"; // `AppProps`ni to'g'ri import qilish
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss"
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";



export default function App({ Component, pageProps }: AppProps) { // Sintaksisni to'g'irlash
  // @ts-ignore: TypeScript uchun, agar xato bo'lsa
  const [theme, setTheme] = useState(() => createTheme(light)); // To'g'ri `useState` ishlatish

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
