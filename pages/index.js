import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <title>Home</title>
        <Link href="/about">About</Link>
        <br />
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/blog/post">Blog post</Link>
        <br />
      </main>
    </div>
  );
}
