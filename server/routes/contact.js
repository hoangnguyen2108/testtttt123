
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('content/contact', { 
    page: 'contact',
    title: 'Survey' 
  });
});

module.exports = router;
