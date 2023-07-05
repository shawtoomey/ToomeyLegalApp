import Register from '/signup';

const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../passport");

const Users = require("../models/user");

let validations = [
  check("email")
    .isEmail()
    .withMessage("The email you have entered is not valid")
    .contains("@")
    .withMessage("The email you have entered does not contain an @"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("The password must have at least 5 characters")
];

// Throw error if the key doesn't exist
if (!process.env.JWT_SECRET) {
  console.error("Cannot find JWT key");
}

function generateWebToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, {
    subject: user.email,
    expiresIn: "7d",
    algorithm: "HS256"
  });
}

/* POST register a user if one doesn't already exist */
module.exports.register = [
    ...validations,
    (req, res) => {
      // Get validation errors from the request
      const errors = validationResult(req);
      // Return the errors
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
      }
  
      let hashedPassword = Users.hashPassword(req.body.password);
  
      Users.findOne({ email: req.body.email })
        .then(function(user) {
          if (user) {
            return res
              .status(400)
              .send(`An account with the email ${req.body.email} already exists`);
          } else {
            Users.create({
              email: req.body.email,
              password: hashedPassword
            })
              .then(function(user) {
                res.status(201).json(user);
              })
              .catch(function(err) {
                console.error(err);
                res.status(500).send(`Error ${err}`);
              });
          }
        })
        .catch(function(err) {
          console.error(err);
          res.status(500).send(`Error ${err}`);
        });
    }
  ];