import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, enableFooter, isAdmin }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {<Header isAdmin={isAdmin} />}
      {children}
      {enableFooter && <Footer />}
    </>
  );
};

export default Layout;
