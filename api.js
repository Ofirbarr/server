const express = require("express");
const Joi = require("joi");
const app = express();
const { User } = require("./models/models");
const { validateSignin } = require("./Validators/signin");

app.use(express.json());

app.post("/signin", async (req, res) => {
  const { error, value } = validateSignin(req.body);

  if (error) {
    console.log(error);
    return res.send(error.details);
  }
  const addUser = new User(req.body);
  const data = await addUser.save();
  return res.sendStatus(200).send({ msg: "user added", data });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .sendStatus(400)
      .send({ error: "username or password are missing" });
  }
  const user = await User.findOne(
    user.username === username && user.password === password
  );
  if (!user) {
    return res
      .sendStatus(400)
      .send({ error: "username or password are wrong" });
  } else {
    return res.sendStatus(200).send("Successfully logged in!");
  }
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
