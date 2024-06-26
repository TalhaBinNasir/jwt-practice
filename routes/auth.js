const router = require("express").Router();
const User = require("../model/User");
const Joi = require("@hapi/joi");

const schema = {
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
};

router.post("/register", async (req, res) => {
  const { error } = Joi.valdate(req.body, schema);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
