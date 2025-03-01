import Book from '../models/book';
import Author from '../models/author';
import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();



router.get('/', async (req: Request, res: Response) => {

    try {
        const bookID = req.query.id;

        if(typeof bookID === "string") {
            const data = await Book.getBookDtls(bookID);
            
            res.status(200).send(data);
        } else {
            res.status(404).send('No authors found');
        }
    } catch(error) {
        res.status(500).send('Could not get book details' + error);
    }

});

export default router;
