import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>CodeClash</title>
      </Head>

      <main className="flex min-h-0 flex-col items-center justify-top">
        {children}
      </main>

      <footer className="bottom-0 flex h-20 w-full items-center mt-14 justify-center border-t-2">
        <a
          className="flex items-center justify-center gap-2 cursor-pointer"
          href="https://upe.cs.fiu.edu/sparkdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <strong className="text-pink-500">SparkDev</strong> |
          Copyright &copy; 2022
        </a>
      </footer>
    </div>
  );
};

export default Layout;
