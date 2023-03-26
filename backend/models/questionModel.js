const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: false
    },

    questionsList: [
        {
            questionName: { type: String },
            optionA: { type: String, },
            optionB: { type: String },
            optionC: { type: String },
            optionD: { type: String },
            correctOption: { type: String, },
            userAnswer: { type: String, default: "E" }
        },
    ],

    passStatus: {
        type: String
    },
    marksObtain: {
        type: String
    },
    testComplete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question 