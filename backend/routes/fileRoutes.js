const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadFiles, getFiles } = require("../controllers/fileController");

router.route("/uploadFolder").post(uploadFiles);
router.route("/").post(getFiles);
module.exports = router;
