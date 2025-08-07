
const chalk = require("chalk");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(chalk.blue("Get from Users"));
  res.send("Get from Users");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Bad Request - Id is empty");
  }

  console.log(chalk.blue(`Get from Users with id: ${id}`));
  res.send(`Get from Users with id: ${id}`);
});

router.post("/", (req, res) => {
  console.log(chalk.blue("Post from Users"));
  res.send("Post from Users");
});

router.post("/login", (req, res) => {
  console.log(chalk.blue("Post from Users with login"));
  res.send("Post from Users with login");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(chalk.blue(`Put from Users with id: ${id}`));
  res.send(`Put from Users with id: ${id}`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log(chalk.blue(`Patch from Users with id: ${id}`));
  res.send(`Patch from Users with id: ${id}`);
});

router.delete("/:id", (req, res) => {
  console.log(chalk.blue(`In User Delete!`));
  const user_id = req.params.id;
  res.send(`User Deleted: ${user_id}`);
});

module.exports = router;