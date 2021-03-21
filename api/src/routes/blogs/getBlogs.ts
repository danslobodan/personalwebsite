import express, { Request, Response } from 'express';
import Parser from 'rss-parser';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const parser = new Parser();
    const mediumResponse = await parser.parseURL(
        'https://medium.com/feed/@danastroman'
    );
    const blogs = mediumResponse.items.map((item) => {
        return {
            id: item.guid,
            title: item.title,
            link: item.link,
            img: item.imgUrl,
            date: item.pubDate,
        };
    });
    res.send(blogs);
});

export { router as getBlogsRouter };
