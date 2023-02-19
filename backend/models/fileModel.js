const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({
    batchCode: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
        unique: false
    },
    files: {
        type: String,
        required: true,
        unique: false
    },
    folderName: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
})

const File = mongoose.model('File', fileSchema)

module.exports = File 