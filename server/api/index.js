import express from 'express';

import fakeroute from './fakeroute'

let router = express.Router();

router.use('/fakeroute', fakeroute);

export default router;