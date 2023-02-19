const File = require("../models/fileModel");
const asyncHandler = require("express-async-handler");

// @dec      Upload Folder
// @routes   POST /api/upload/files
// @access   PRIVATE/Admin
exports.uploadFiles = asyncHandler(async (req, res) => {
    const { batchCode, tags, files, folderName } = req.body

    const file = await File.create({
        batchCode, tags, files, folderName
    })

    if (file) {
        res.status(201).json({ message: 'Folder Upload Successfully' })
    } else {
        console.log(error)
        throw new Error("Error in Upload folder");
    }
});

// @dec      Upload Folder
// @routes   POST /api/upload/files
// @access   PRIVATE/Admin
exports.getFiles = asyncHandler(async (req, res) => {
    const { batchCode } = req.body

    const fileFound = await File.find({ batchCode: batchCode })

    if (fileFound) {
        res.status(201).json({ data: fileFound })
    } else {
        console.log(error)
        throw new Error("No data found!");
    }
});
