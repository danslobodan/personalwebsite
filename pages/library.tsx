import BookCard, { Book } from "@/components/library/BookReview";

const Books: React.FC = () => {
    return (
        <div>
            <div
                style={{
                    marginBottom: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "justify",
                }}
            >
                Below you will find a list of all the books I have read and
                would highly recommend you read as well, if you are a developer,
                technical team lead or a software architect. I feel that
                managers could also benefit substantially by reading many of
                these books.
            </div>
            {books.map((book) => {
                return <BookCard key={book.title} book={book} />;
            })}
        </div>
    );
};

const books: Book[] = [
    {
        title: "Head First Design Patterns",
        authors: "Eric Freeman, Kathy Sierra, Bert Bates, Elisabeth Robson",
        description:
            "I found that learning good programing principles from \
        this book was even more useful than learning the design patterns it describes. \
        Besides amazing content, it's wonderfully fun to read as well.",
        coverImage: "head-first-design-patterns.jpg",
    },
    {
        title: "Clean Architecture",
        authors: "Robert C. Martin",
        description:
            "This is so far my favorite book and the one I \
        come back to the most. It covers programming paradigms, SOLID principles, \
        components, and then dives deep into software architecture.",
        coverImage: "clean-architecture.jpg",
    },
    {
        title: "The Phoenix Project",
        authors: "Gene Kim, Kevin Behr, George Spafford",
        description:
            "A very fun and exciting novel about the woes of maintaining \
        software infrastructure and deployment pipelines and schedules. \
        I can't count how many times I laughed out loud when \
        the protagonists had the exact same problem as \
        we did in our everyday work. Learn together with them how to overcome these \
        problems and get a fun introduction to DevOps culture.",
        coverImage: "phoenix-project.jpg",
    },
    {
        title: "The Unicorn Project",
        authors: "Gene Kim",
        description:
            "Very similar in style, and just as fun as its predecessor \
        The Phoenix Project, but focuses more on a single team, and software development, \
        rather on bigger picture things. You could say that it's a zoomed in version \
        of The Phoenix Project.",
        coverImage: "unicorn-project.jpg",
    },
    {
        title: "Accelerate",
        authors: "Nicole Forsgren, PhD Jez Humble, Gene Kim",
        description:
            "Ever wondered what technical or management practices actually \
        produce quality, faster delivery and happier teams? Look no further. \
        This book summarizes years of rigorous research from State of DevOps Reports, \
        built upon 23,000 datasets from companies around the world. An absolute must read, \
        regardless of whether you're a developer, manager or CTO.",
        coverImage: "accelerate.jpg",
    },
    {
        title: "Team Topologies",
        authors: "Matthew Skelton, Manuel Pais",
        description:
            "This book introduced me to Conway's law and cognitive load. \
            It discussed how and when to provide an organizational structure \
            that matches the software architecture, and keeps the teams happy and productive. \
            A tough read, but well worth the invested time.",
        coverImage: "team-topologies.jpg",
    },
    {
        title: "This Is Lean: Resolving the Efficiency Paradox",
        authors: "Niklas Modig",
        description:
            "I find Lean methodology extremely appealing and try to incorporate \
        it whenever and wherever I can. This book discusses what exactly is efficient and \
        what is wasteful. It's surprisingly insightful for such a light read.",
        coverImage: "this-is-lean.jpg",
    },
    {
        title: "Lean Startup",
        authors: "Eric Ries",
        description:
            "It's easy, as a developer, to forget that your job is \
        to make money for the company you're working for, by providing services \
        that their customers delight in. Sometimes this is done by withholding from writing \
        any code or even deleting some. This book discusses what an MVP can be, \
        as well as the only metrics that actually \
        measure how good your software is - metrics of the bottom line. It's so good I read it twice already.",
        coverImage: "lean-startup.jpg",
    },
    {
        title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        authors: "Eric Evans",
        description:
            "I'm really inspired by the idea that the language of the domain experts should drive the \
        development process. This is the core concept of Domain Driven Design.",
        coverImage: "domain-driven-design.jpg",
    },
    {
        title: "The DevOps Handbook",
        authors: "Gene Kim, Jez Humble, Patrick Debois, John Willis",
        description:
            "A practical guide to implementing organizational efficiency through DevOps principles. \
            It follows and expands on 'the three ways' in The Phoenix Project novel.",
        coverImage: "dev-ops-handbook.jpg",
    },
];

export default Books;
