const express = require('express');
const router = express.Router();

router.get ('/page', (req, res) => {
    console.log('work')
    res.render("page")
})

module.exports = router;