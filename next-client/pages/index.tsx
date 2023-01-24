import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Slobodan Dan, highly experienced software developer in game and web development."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className="row">
                    <Image
                        width="300"
                        height="300"
                        className="d-lg-none"
                        src="/ta-jumbo-v.png"
                        alt="true architect logo"
                    ></Image>
                    <Image
                        width="300"
                        height="300"
                        className="d-none d-lg-block"
                        src="/ta-jumbo-h.png"
                        alt="true architect logo"
                    ></Image>
                </div>
            </main>
        </>
    );
}
