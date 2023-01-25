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
            <main>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "space-around",
                    }}
                >
                    <div style={{ fontSize: 120 }}>Dan Slobodan</div>
                    <img
                        className="d-lg-none"
                        src="ta-jumbo-v.png"
                        alt="true architect logo"
                    />
                    <p style={{ fontSize: 40 }}>
                        Tech lead, developer, manager, teacher, writer, with
                        over a decade of experience in the IT industry,
                        including large code-bases, enterprise scale
                        applications, team-leading, SCRUM and Agile practices
                        and software architecture.
                    </p>
                    <Link href="/about">More...</Link>
                    <img
                        className=""
                        src="CV-Laptop.jpg"
                        width={450}
                        alt="true architect logo"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                ></div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h2>The true architect</h2>
                        <p>
                            Far from thinking myself as a true architect, much
                            less THE true architect it is rather a name for my
                            journey - my path.
                        </p>
                        <p>
                            The inspiration for the name comes from the fact
                            that titles in the IT industry no longer represent
                            seniority or knowledge that the person holds, but
                            are rather vanity titles to be displayed to
                            recruiters or customers.
                        </p>
                        <p>
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
                        <p>
                            Similarly, he argues that the goal of software
                            design is to{" "}
                            <i>
                                minimize the effort required in order to meet
                                the needs of the customer.
                            </i>{" "}
                            In other words, if the software is easy to change,
                            the design is good, and vice versa.
                        </p>
                        <p>
                            The authors of{" "}
                            <ExternalLink href="https://teamtopologies.com/">
                                Team Topologies
                            </ExternalLink>{" "}
                            further argue that due to{" "}
                            <ExternalLink href="https://www.thoughtworks.com/insights/articles/demystifying-conways-law">
                                Conway`&apos;`s Law
                            </ExternalLink>{" "}
                            <i>
                                organization design requires technical
                                expertize.
                            </i>{" "}
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
                                they need to have a say in organizational
                                structures and personnel issues, i.e. they need
                                to be a manager too.
                            </i>
                        </p>
                        <p>
                            These and similar ideas from some of the amazing{" "}
                            <Link href="/books">books</Link> I read led me to
                            define the five tenets descibed in the path.
                        </p>
                        <Link className="btn btn-primary" href="/tenets">
                            The Path
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
