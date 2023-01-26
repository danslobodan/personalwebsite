import BookCard, { Book } from "@/components/books/BookReview";

const Books: React.FC = () => {
    return (
        <div>
            {books.map((book) => {
                return (
                    <div style={{ marginBottom: "40px" }} key={book.title}>
                        <BookCard book={book} />
                    </div>
                );
            })}
        </div>
    );
};

const books: Book[] = [
    {
        title: "Accelerate",
        authors: "Nicole Forsgren, Jez Humble, Gene Kim",
        description:
            "Does technology actually matter? And how can we apply \
        technology to drive business value? For years, we've \
        been told that the performance of software delivery teams \
        doesn't matter—that it can't provide a competitive \
        advantage to our companies. Through four years of \
        groundbreaking research, Dr. Nicole Forsgren, Jez Humble, \
        and Gene Kim set out to find a way to measure software \
        delivery performance—and what drives it—using rigorous \
        statistical methods.",
        coverImage: "accelerate.jpg",
    },
    {
        title: "The DevOps Handbook",
        authors:
            "John Allspaw(Foreword), Gene Kim, Patrick Debois, John Willis, Jez Humble",
        description:
            "More than ever, the effective management of technology is \
            critical for business competitiveness. For decades, technology \
            leaders have struggled to balance agility, reliability, and security. \
            The consequences of failure have never been greater whether it's the healthcare.gov debacle, \
            cardholder data breaches, or missing the boat with Big Data in the cloud.",
        coverImage: "dev-ops-handbook.jpg",
    },
    {
        title: "Team Topologies",
        authors: "Matthew Skelton, Manuel Pais",
        description:
            "eam Topologies is a practical, step-by-step, adaptive model for \
            organizational design and team interaction based on four fundamental \
            team types and three team interaction patterns. It is a model that \
            treats teams as the fundamental means of delivery, where team structures \
            and communication pathways are able to evolve with technological and organizational maturity.",
        coverImage: "team-topologies.jpg",
    },
];

export default Books;
