const router = require('express').Router()
const {Tool} = require('../db/models')

module.exports = router

router.post('/tools', (req, res, next) => {
  let newTool = req.body
  // Tool.create({

  // })
    // .then(tool => res.json(tool))
    // .catch(next)
    res.send('building');
})

export default router;