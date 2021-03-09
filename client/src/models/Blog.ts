export interface Blog extends BlogFields {
    id: string;
}

export interface BlogFields {
    title: string;
    description: string;
    url: string;
    date: Date;
}
