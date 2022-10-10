import Head from "next/head";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CodeClash</title>

      </Head>

      <main className="flex min-h-screen flex-col items-center justify-top">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
