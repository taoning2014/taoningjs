var router = require('express').Router();

router.get(/^\/(index(.html)?)?$/, function(req, res) {
  res.render('pages/index');
});

module.exports = router;
