const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const fs = require("fs");

function runJavaScriptCode(file_path) {
  try {
    return new Promise((resolve, reject) => {
      exec("node " + file_path, (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      });
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    return { error: error.message };
  }
}

router.post("/", function (req, res, next) {
  const codeToRun = req.body.code;
  if (!codeToRun) {
    return res
      .status(400)
      .json({ error: "Code is required in the request body." });
  }
  fs.writeFile("./routes/code/test.js", codeToRun, async (error) => {
    if (error) {
      throw new Error("Cannot write a file");
    }
    try {
      const output = await runJavaScriptCode("./routes/code/test.js");
      res.render("result", { result: output });
      fs.writeFileSync("./routes/code/test.js", "");
    } catch (error) {
      res.status(500).send({ message: error });
    }
  });
});

module.exports = router;
