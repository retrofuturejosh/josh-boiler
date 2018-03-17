import express from 'express';
let router = express.Router();

router.get('/', (req, res, next) => {
  let response = {youBetter: "get it, squirrelfriend"};
  res.json(response);
});

export default router;