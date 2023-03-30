import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    // <Layout>
    <div>
      <title>Home</title>
      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/blog/post">Blog post</Link>
      <br />
      <Image src="/image/fb.jpg" width="300" height="200" />
    </div>
    // </Layout>
  );
}
