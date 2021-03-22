export interface Blog extends BlogFields {
    id: string;
}

export interface BlogFields {
    title: string;
    description: string;
    imgSrc: string;
    link: string;
    date: Date;
}
