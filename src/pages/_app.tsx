import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import * as Sentry from "@sentry/node";
import theme from "../components/Theme";
import { AnimatePresence } from "framer-motion";

import "../styles/index.css";
/**
 *
 *  This is for Google Analytics
 * */
import * as gtag from "../lib/gtag";
import Router from "next/router";
process.env.NODE_ENV === "production"
  ? Router.events.on("routeChangeComplete", (url) => gtag.pageview(url))
  : null;

process.env.NODE_ENV === "production"
  ? Sentry.init({
      dsn: "https://c0e5b834500d45b88fb648ccf7c489bf@sentry.io/1838052",
    })
  : null;

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export async function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  console.log(metric);
  await fetch("/api/monitoring", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metric),
  });
}

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    // Workaround for https://github.com/zeit/next.js/issues/8592
    // @ts-ignore
    const { err } = this.props;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...modifiedPageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    );
  }
}

export default MyApp;
