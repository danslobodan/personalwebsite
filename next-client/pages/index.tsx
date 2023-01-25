import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>The True Architect</title>
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
            <main
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "2em",
                    marginLeft: "2em",
                    marginRight: "2em",
                    fontSize: 25,
                }}
            >
                <div style={{ fontSize: 40, margin: "1rem" }}>Dan Slobodan</div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <img
                            style={{
                                maxWidth: "450px",
                                minWidth: "250px",
                                width: "100%",
                                height: "auto",
                            }}
                            src="CV-Laptop.jpg"
                            alt="Potrait with laptop"
                        />
                    </div>
                    <div style={{ marginLeft: "2em" }}>
                        <p style={{ marginBottom: "1em" }}>
                            Tech lead, developer, manager, teacher, writer, with
                            over a decade of experience in the IT industry,
                            including large code-bases, enterprise scale
                            applications, team-leading, SCRUM and Agile
                            practices and software architecture.
                        </p>
                        <Link href="/about">More...</Link>
                    </div>
                </div>
                <div style={{ marginTop: "2em", marginBottom: "2em" }}>
                    <p style={{ marginBottom: "2em" }}>
                        The titles in the IT industry no longer represent
                        seniority or knowledge that the person holds. They
                        became vanity titles to be displayed to recruiters or
                        customers.
                    </p>
                    <p>I do not seek vanity titles. I seek mastery.</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <img
                        style={{
                            maxWidth: "800px",
                            width: "100%",
                            height: "auto",
                        }}
                        src="ta-jumbo-v.png"
                        alt="Potrait with laptop"
                    />
                </div>
                <div>
                    <p style={{ marginTop: "2em", marginBottom: "2em" }}>
                        <ExternalLink href="http://cleancoder.com/products">
                            Uncle Bob`&apos;`s
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
                    <p style={{ marginBottom: "2em" }}>
                        Similarly, he argues that the goal of software design is
                        to{" "}
                        <i>
                            minimize the effort required in order to meet the
                            needs of the customer.
                        </i>{" "}
                        In other words, if the software is easy to change, the
                        design is good, and vice versa.
                    </p>
                    <p style={{ marginBottom: "2em" }}>
                        The authors of{" "}
                        <ExternalLink href="https://teamtopologies.com/">
                            Team Topologies
                        </ExternalLink>{" "}
                        further argue that due to{" "}
                        <ExternalLink href="https://www.thoughtworks.com/insights/articles/demystifying-conways-law">
                            Conway`&apos;`s Law
                        </ExternalLink>{" "}
                        <i>organization design requires technical expertize.</i>{" "}
                        To quote{" "}
                        <ExternalLink href="https://www.allankellyassociates.co.uk/">
                            Allan Kelly
                        </ExternalLink>
                        , as the authors did in the book,{" "}
                        <i>
                            someone who claims to be an Architect needs both
                            technical and social skills,
                        </i>{" "}
                        and{" "}
                        <i>
                            they need to have a say in organizational structures
                            and personnel issues, i.e. they need to be a manager
                            too.
                        </i>
                    </p>
                    <p style={{ marginBottom: "2em" }}>
                        These and similar ideas from some of the amazing{" "}
                        <Link href="/books">books</Link> I read led me to define
                        the five tenets descibed in{" "}
                        <Link href="/books">the path</Link>.
                    </p>
                </div>
            </main>
        </>
    );
}
