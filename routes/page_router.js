const express = require('express')
const router = express.Router()



// router.get('/', (req, res) => {
//   res.send('homepage')
// })

router.get('/about', (req,res) => {
  res.send('about')
})

router.get('/faq', (req,res) => {
  res.send('faq')
})

// const about = require('./routes/about_router')
// app.use('/about', about)
//
// const faq = require('./routes/faq_router')
// app.use('/faq', faq)


module.exports = router
