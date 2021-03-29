export interface Blog extends BlogFields {
    id: string;
}

export interface BlogFields {
    title: string;
    snippet: string;
    imgSrc: string;
    link: string;
    date: Date;
}
