const express = require("express")
const router = express.Router()
const { addQuestion, checkQuestionAndGiveResult, getTestQuestionWithTestIdAndUserId } = require('../controllers/questionController')
// const { protect, admin } = require('../middleware/authMiddleware')

router.post('/addQuestion', addQuestion)
router.post('/submitAnswerAndCheckResult', checkQuestionAndGiveResult)
router.post('/getQuestions', getTestQuestionWithTestIdAndUserId)

module.exports = router