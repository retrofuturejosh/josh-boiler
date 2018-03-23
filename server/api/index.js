import express from 'express';

import news from './news'

let router = express.Router();

router.use('/news', news);

export default router;