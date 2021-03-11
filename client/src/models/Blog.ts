export interface Blog extends BlogFields {
    id: string;
}

export interface BlogFields {
    title: string;
    description: string;
    link: string;
    date: Date;
}
