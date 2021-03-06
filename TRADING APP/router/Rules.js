const express = require("express");
const fs = require("fs");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Connect = require("../module/Rules");

router.post(
  "/",
  [check("rule", "rule is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { rule } = req.body;
    try {
      let watchlistData = new Connect({ rule });
      let save = await watchlistData.save();
      res.send(save);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

router.get("/show", async (req, res) => {
  let data = await Connect.find();
  fs.writeFile(
    "./front/src/Data/Showrule.json",
    JSON.stringify(data),
    (err) => {
      console.log("done");
      console.log(err);
    }
  );
  res.send(data);
});

router.delete("/delete", async (req, res) => {
  try {
    const dataDelete = await Connect.deleteMany({});
    res.send({ dataDelete });
  } catch (error) {
    console.log(error);
  }
});

router.delete(
  "/delete/one",
  [check("rule", "rule is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { rule } = req.body;
    try {
      const data = await Connect.findOne({ rule: rule });
      const dataDelete = await Connect.deleteOne({ _id: data._id });
      res.send({ dataDelete });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
