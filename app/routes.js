// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'magical-powers-answer'
router.post('/magical-powers-answer', function (req, res) {

// Make a variable and give it the value from 'create'
var magicPowers = req.session.data.create

// Check whether the variable matches a condition
if (magicPowers == "yes"){
// Send user to next page
res.redirect('/question-page-mhs-one-page')
} else {
// Send user to ineligible page
res.redirect('/question-page-asid')
}

})
module.exports = router;
