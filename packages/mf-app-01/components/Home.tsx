import Head from "next/head";
import styles from "../styles/Home.module.css";

export function Home(props: { page: string }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MF App</title>
        <meta name="description" content="Generated by mf-framework-cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/marcelovicentegc/microfrontend-framework">
            MF Framework
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/{props.page}.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/marcelovicentegc/microfrontend-framework#readme"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about MF framework features and API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
