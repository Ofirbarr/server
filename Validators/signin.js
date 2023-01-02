const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const signinSchema = Joi.object({
  username: Joi.string().min(8).required(),
  password: Joi.string().min(6).required(),
});

exports.validateSignin = validator(signinSchema);
