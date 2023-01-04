import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>fastandfuriouscats</title>
        <meta
          name="description"
          content="The official page of fastandfuriouscats"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to the official page of fastandfuriouscats</p>
        </div>
        <div className={styles.description}>
          <p>Watch our funny animals video collection here -</p>
          <p>
            <a
              title="Tik tok"
              href="https://www.tiktok.com/@fastandfuriouscats"
            >
              <Image
                src="/tiktok.svg"
                alt="fastandfuriouscat"
                width={100}
                height={100}
                priority
              />
            </a>
          </p>
          <p>
            <a
              title="Youtube channel"
              href="https://www.youtube.com/@fastandfuriouscats"
            >
              <Image
                src="/youtube.svg"
                alt="fastandfuriouscat"
                width={100}
                height={100}
                priority
              />
            </a>

            {/* <a title="Instagram page" href="https://www.instagram.com/fastandfuriouscats/">
                    <Image
                        src="/insta.svg"
                        alt="fastandfuriouscat"
                        width={50}
                        height={50}
                        priority
                    />
                </a>  */}
          </p>
        </div>

        <div className={styles.center}>
          <div>
            <Image
              src="/dalle.png"
              alt="fastandfuriouscat"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
