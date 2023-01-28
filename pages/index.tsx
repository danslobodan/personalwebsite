import styles from "./index.module.css";

import Head from "next/head";
import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";

export default function Home() {
    return (
        <>
            <Head>
                <title>The True Architect</title>
                <meta
                    name="description"
                    content="Slobodan Dan, with over a decade of
                    experience in the IT industry, including large
                    code-bases, enterprise scale applications,
                    team-leading, SCRUM and Agile practices and software
                    architecture."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.introContainer}>
                    <img
                        className={styles.imagePotrait}
                        src="CV-Laptop.jpg"
                        alt="Potrait with laptop"
                    />
                    <div className={styles.introTextContainer}>
                        <div className={styles.introName}>Slobodan Dan</div>
                        <p className={styles.introText}>
                            Developer, manager, writer, with over a decade of
                            experience in the IT industry, including large
                            code-bases, enterprise scale applications,
                            team-leading, SCRUM and Agile practices and software
                            architecture.
                        </p>
                        <Link href="/cv">Details...</Link>
                    </div>
                </div>
                <div className={styles.middleTextContainer}>
                    <p className={styles.middleTextTop}>
                        The titles in the IT industry no longer represent
                        seniority or knowledge that the person holds. They
                        became vanity titles to be displayed to recruiters and
                        customers.
                    </p>
                    <p className={styles.middleTextBottom}>
                        I do not seek vanity titles. I seek mastery. The true
                        architect is not a title - it&apos;s a path.
                    </p>
                </div>
                <div className={styles.taImageContainer}>
                    <img
                        className={styles.taImage}
                        src="ta-jumbo-v.png"
                        alt="Potrait with laptop"
                    />
                </div>
                <div className={styles.citationsContainer}>
                    <p className={styles.citation}>
                        <ExternalLink href="http://cleancoder.com/products">
                            Uncle Bob&apos;s
                        </ExternalLink>{" "}
                        definition of the goal of the software architect is{" "}
                        <i>
                            minimization of manpower in all phases of
                            development, deployment, and maintenance.
                        </i>
                        <blockquote>
                            &mdash; Uncle Bob Martin (@unclebobmartin){" "}
                            <ExternalLink href="https://twitter.com/unclebobmartin/status/1310261381233430528?ref_src=twsrc%5Etfw">
                                September 27, 2020
                            </ExternalLink>
                        </blockquote>{" "}
                        <script
                            async
                            src="https://platform.twitter.com/widgets.js"
                        ></script>
                    </p>
                    <p className={styles.citation}>
                        Similarly, he argues that the goal of software design is
                        to{" "}
                        <i>
                            minimize the effort required in order to meet the
                            needs of the customer.
                        </i>{" "}
                        In other words, if the software is easy to change, the
                        design is good, and vice versa.
                    </p>
                    <p className={styles.citation}>
                        The authors of{" "}
                        <ExternalLink href="https://teamtopologies.com/">
                            Team Topologies
                        </ExternalLink>{" "}
                        further argue that due to{" "}
                        <ExternalLink href="https://www.thoughtworks.com/insights/articles/demystifying-conways-law">
                            Conway&apos;s Law
                        </ExternalLink>{" "}
                        <i>organization design requires technical expertize.</i>{" "}
                        To quote{" "}
                        <ExternalLink href="https://www.allankellyassociates.co.uk/">
                            Allan Kelly
                        </ExternalLink>
                        , as the authors did in the book:{" "}
                        <i>
                            &quot;...someone who claims to be an Architect needs
                            both technical and social skills,
                        </i>{" "}
                        and{" "}
                        <i>
                            they need to have a say in organizational structures
                            and personnel issues, i.e. they need to be a manager
                            too.&quot;
                        </i>
                    </p>
                    <p className={styles.citation}>
                        These and similar ideas from some of the amazing{" "}
                        <Link href="/library">books</Link> I read led me to
                        define the five tenets descibed in{" "}
                        <Link href="/tenets">the path</Link>.
                    </p>
                </div>
            </main>
        </>
    );
}
