const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/list", (req, res) => {
  let direction_path = req.query.path;
  if (!direction_path) {
    direction_path = "C:/Users";
  }
  const directionPath = path.join(direction_path);
  if (fs.statSync(directionPath).isDirectory()) {
    fs.readdir(directionPath, (err, files) => {
      if (err) throw err;
      const arr = files.map((e) => {
        return {
          real_path: directionPath + "\\" + e,
          path: e,
          isFile: fs.statSync(directionPath + "\\" + e).isFile(),
        };
      });
      res.render("files", { data: arr });
    });
  } else {
    res.sendFile(directionPath);
  }
});

module.exports = router;
