const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    testName: {
        type: String,
        required: true,
    },
    batchCode: {
        type: String,
        required: true
    },
    testTime: {
        type: String,
        required: true
    },
    testDate: {
        type: Date
    }
}, {
    timestamps: true
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test 