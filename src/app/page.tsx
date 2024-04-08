import styles from './page.module.css';

import Link from 'next/link';

import { ResponsiveImage } from '@/components/ResponsiveImage';
import { ExternalLink } from '@/components/ExternalLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The True Architect',
    description:
        'The true architect is not a title. It is a path to follow on your way on becoming a good software architect.',
};

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className='row'>
                    <div className='col-8'>
                        <div className={styles.introTextContainer}>
                            <div className={styles.introName}>Slobodan Dan</div>
                            <div className={styles.introText}>
                                Full stack developer, manager, writer, with over
                                a decade of experience in the IT industry,
                                including large code-bases, enterprise scale
                                applications, team-leading, Lean, Agile and
                                SCRUM management frameworks and software
                                architecture.
                            </div>
                            <Link href='/cv'>Details...</Link>
                        </div>
                    </div>
                    <div className='col-4'>
                        <ResponsiveImage
                            className={styles.imagePotrait}
                            src='CV-Laptop.jpg'
                            alt='Potrait with laptop'
                            width={667}
                            height={1000}
                        />
                    </div>
                </div>
                <div className={styles.middleTextContainer}>
                    <div className={styles.middleTextTop}>
                        When the titles in the IT industry no longer represent
                        seniority or knowledge, they become vanity titles to be
                        displayed to recruiters and customers.
                    </div>
                    <div>
                        The true architect is not a title. It is a path I follow
                        on my way to becoming a good software architect.
                    </div>
                </div>
                <div className={styles.taImageContainer}>
                    <ResponsiveImage
                        className={styles.taImage}
                        src='ta-jumbo-v.png'
                        alt='Potrait with laptop'
                        width={820}
                        height={438}
                    />
                </div>
                <div className={styles.citationsContainer}>
                    <div className={styles.citation}>
                        <ExternalLink href='http://cleancoder.com/products'>
                            Uncle Bob&apos;s
                        </ExternalLink>{' '}
                        definition of the goal of the software architect is{' '}
                        <i>
                            minimization of manpower in all phases of
                            development, deployment, and maintenance.
                        </i>
                        <blockquote>
                            &mdash; Uncle Bob Martin (@unclebobmartin){' '}
                            <ExternalLink href='https://twitter.com/unclebobmartin/status/1310261381233430528?ref_src=twsrc%5Etfw'>
                                September 27, 2020
                            </ExternalLink>
                        </blockquote>{' '}
                        <script
                            async
                            src='https://platform.twitter.com/widgets.js'
                        ></script>
                    </div>
                    <div className={styles.citation}>
                        Similarly, he argues that the goal of software design is
                        to{' '}
                        <i>
                            minimize the effort required in order to meet the
                            needs of the customer.
                        </i>{' '}
                        In other words, if the software is easy to change, the
                        design is good, and vice versa.
                    </div>
                    <div className={styles.citation}>
                        The authors of{' '}
                        <ExternalLink href='https://teamtopologies.com/'>
                            Team Topologies
                        </ExternalLink>{' '}
                        further argue that due to{' '}
                        <ExternalLink href='https://www.thoughtworks.com/insights/articles/demystifying-conways-law'>
                            Conway&apos;s Law
                        </ExternalLink>{' '}
                        <i>organization design requires technical expertize.</i>{' '}
                        To quote{' '}
                        <ExternalLink href='https://www.allankellyassociates.co.uk/'>
                            Allan Kelly
                        </ExternalLink>
                        , as the authors did in the book:{' '}
                        <i>
                            &quot;...someone who claims to be an Architect needs
                            both technical and social skills,
                        </i>{' '}
                        and{' '}
                        <i>
                            they need to have a say in organizational structures
                            and personnel issues, i.e. they need to be a manager
                            too.&quot;
                        </i>
                    </div>
                    <div className={styles.citation}>
                        These and similar ideas from some of the amazing{' '}
                        <Link href='/library'>books</Link> I read led me to
                        define the{' '}
                        <Link href='/five-tenets'>
                            five tenets of the true architect
                        </Link>
                        .
                    </div>
                </div>
            </main>
        </>
    );
}
