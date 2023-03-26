const express = require("express")
const router = express.Router()
const { addTest, getTestByBatchCode } = require('../controllers/testController')
// const { protect, admin } = require('../middleware/authMiddleware')

router.post('/createTest', addTest)
router.post('/findTest', getTestByBatchCode)

module.exports = router