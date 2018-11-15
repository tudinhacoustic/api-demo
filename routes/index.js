var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/post.html', (req, res, next)=>{
  res.render('test/index', {title: 'POST API'});
})

module.exports = router;
