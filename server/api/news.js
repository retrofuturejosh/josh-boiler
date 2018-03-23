import express from 'express';
import axios from 'axios';

import {newsKey} from '../../secrets'

let router = express.Router();

router.get('/', async (req, res, next) => {
  let data;
  try {
    if (req.query.country) {
      data = await fetchNews(req.query.country);
    } else if (req.query.topic) {
      data = await fetchNews(null, req.query.topic);
    }
    res.json(data.articles);
  }
  catch (error) {
    res.send(error)
  }
});

async function fetchNews(country, topic) {
  try {
    let response;
    if (country) {
      response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${newsKey}`);
    } else {
      response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sortby=popularity&apiKey=${newsKey}`);
    }
    return response.data;
  }
  catch(error) {
    console.log(error)
  }
}

export default router;