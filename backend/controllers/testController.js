const asyncHandler = require("express-async-handler")
const Test = require('../models/testModel')
const nodemailer = require('nodemailer')
const express = require("express")


// @dec      Add test
// @routes   POST /api/test/createdTest
// @access   Private

exports.addTest = asyncHandler(async (req, res) => {
    const { testName, batchCode } = req.body

    const testTime = new Date(req.body.testDate)

    const test = await Test.create({
        testName, batchCode, testTime
    })

    if (test) {
        res.status(201).json({ status: true, message: 'Test Created Successfully!' })
    } else {
        res.status(400).json({ status: false, message: 'Server error' })
    }
})

exports.getTestByBatchCode = asyncHandler(async (req, res) => {
    const { batchCode } = req.body

    const batchCodeData = await Test.find({ batchCode: batchCode })

    if (batchCodeData) {
        res.status(200).json({ status: true, message: 'Test Found', data: batchCodeData })
    } else {
        res.status(204).json({ status: true, message: 'Test Not Found' })
    }
})
