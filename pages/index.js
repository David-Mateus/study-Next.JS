import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello world Next.Js</h1>
        <Image
          src="/images/city.jpg"
          width="300"
          height="400"
          alt="Cidade a noite"
        />
      </div>
    </>
  );
}
