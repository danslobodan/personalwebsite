import styles from "./BookReview.module.css";

interface Props {
    book: Book;
}

interface Book {
    title: string;
    authors: string;
    description: string;
    coverImage: string;
}

const BookReview: React.FC<Props> = ({
    book: { title, authors, description, coverImage },
}) => {
    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col-3">
                    <img
                        className={styles.image}
                        src={coverImage}
                        alt={`${title} cover`}
                    />
                </div>
                <div className="col-9">
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.authors}>{authors}</div>
                        <div className={styles.description}>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export type { Book };

export default BookReview;
