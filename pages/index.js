import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import Popular from "../components/popular";

function Home({ movies }) {
  console.log("movies", movies);
  return (
    // <Layout>
    <>
      ylm
      {/* <title>Home</title>
      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/blog/post">Blog post</Link>
      <br /> */}
      {/* <Image src="/image/fb.jpg" width="300" height="200" /> */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popular movies={movies} />
    </>
    // </Layout>
  );
}

export async function getServerSideProps() {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=en-US&page=1`
  );
  const movies = await request.json();
  return {
    props: {
      movies,
    },
  };
}

export default Home;
