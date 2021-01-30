
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')



router.get('/', [
    check('name', 'Name is required').not().isEmpty().isLength({min: 5}).withMessage('Name must have more than 5 characters'),
    check('github', 'Github username is required with the @ symbol').not().isEmpty().matches(
        (/\@/)),
    check('email', 'Please provide a valid email').not().isEmpty().isEmail().normalizeEmail(),
    check('mobile', "Please provide correct phone number").isLength({ min: 11 }).withMessage('Number must not be less than 11').isLength({ max: 12 }),
    check('twitter', "Kindly input your correct twitter username with the @ symbol").not().isEmpty().trim().matches(
        (/\@/)
      )
],
(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array()})
  }     
  res.status(200).json({message: 'My Rule-Validation API'});
}) 


module.exports = router;