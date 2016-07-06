var router = require('express').Router();

router.get(/^\/(index(.html)?)?$/, function(req, res) {
  res.render('pages/index');
});

router.get('/timeline.html', function(req, res) {
  res.render('pages/timeline');
});

module.exports = router;
