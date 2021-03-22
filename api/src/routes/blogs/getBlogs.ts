import express, { Request, Response } from 'express';
import Parser from 'rss-parser';
import Blog from '../../models/blog';

const router = express.Router();

const parseImgSrc = (content: string): string => {
    const start = content.search('https');
    const end = content.search('.jpeg') + '.jpeg'.length;
    const imgSrc = content.substring(start, end);
    return imgSrc;
};

const parseSnippet = (content: string): string => {
    const snippetStart = content.search('Unsplash') + 'Unsplash'.length;
    const snippet = content.substring(snippetStart).substring(0, 500);
    return snippet;
};

router.get('/', async (req: Request, res: Response<Blog[]>) => {
    const parser = new Parser();
    const mediumResponse = await parser.parseURL(
        'https://medium.com/feed/@danastroman'
    );
    const blogs: Blog[] = mediumResponse.items.map((item, index) => {
        const imgSrc = parseImgSrc(item['content:encoded']);
        const snippet = parseSnippet(item['content:encodedSnippet']);

        return {
            id: item.guid ?? '',
            title: item.title ?? '',
            snippet: snippet,
            imgSrc: imgSrc,
            link: item.link ?? '',
            date: item.pubDate ? new Date(item.pubDate) : undefined,
        };
    });
    res.send(blogs);
});

export { router as getBlogsRouter };
