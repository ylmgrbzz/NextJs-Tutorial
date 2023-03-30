import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <style jsx>{`
        h1 {
          color: red;
          font-size: 50px;
          font-weight: 700;
        }
      `}</style>
    </Layout>
  );
};

export default about;
