const asyncHandler = require("express-async-handler")
const Question = require('../models/questionModel')
var _ = require('lodash');
const User = require('../models/userModel')
const nodemailer = require('nodemailer')
const express = require("express")


// @dec      Add test Question and options
// @routes   POST /api/test/addQuestions
// @access   Private

exports.addQuestion = asyncHandler(async (req, res) => {
    const { questionsList, testId, userId } = req.body

    const findTest = await Question.findOne({ testId: testId })
    const serverUserId = findTest.userId.valueOf()
    if (findTest && (serverUserId === userId)) {
        console.log(1);
        for (let i = 0; i < req.body.questionsList.length; i++) {
            findTest.questionsList.push(req.body.questionsList[i])
        }

        const updateQuestion = await Question.updateMany({ questionsList: findTest.questionsList });
        if (updateQuestion) {
            res.status(201).json({ status: true, message: 'Questions Insert Successfully 😇', data: updateQuestion })
        } else {
            res.status(400)
            throw new Error('Invalid Question Data')
        }
    } else {
        console.log(2);
        const insertQuestion = await Question.insertMany({ questionsList: questionsList, testId: testId, userId: userId });

        if (insertQuestion) {
            res.status(201).json({ status: true, message: 'Questions Insert Successfully 😇', data: insertQuestion })
        } else {
            res.status(400)
            throw new Error('Invalid Question Data')
        }
    }

})

exports.checkQuestionAndGiveResult = asyncHandler(async (req, res) => {
    const { questionsList, testId, userId } = req.body

    const findTest = await Question.findOne({ testId: testId })

    let findUserId = await Question.findOne({ userId: userId })


    let correctAnswerLists = []
    if (findTest && findUserId) {
        for (let i = 0; i < req.body.questionsList.length; i++) {
            if (findTest.questionsList[i]['userAnswer'] == undefined) {
                findTest.questionsList[i]['userAnswer'] = req.body.questionsList[i].userAnswer

            } else {
                findTest.questionsList[i]['userAnswer'] = req.body.questionsList[i].userAnswer
            }
        }

        if (findUserId) {
            findUserId.testId = findUserId.testId,
                findUserId.userId = findUserId.userId,
                findUserId.questionsList = findTest.questionsList
        }

        const updatedQuestionWithAnswer = await findUserId.save();

        if (updatedQuestionWithAnswer) {
            for (let j = 0; j < findTest.questionsList.length; j++) {
                if (questionsList[j]['correctOption'] === questionsList[j]['userAnswer']) {
                    correctAnswerLists.push(questionsList[j])
                }
            }
        }

        const finalData = { correctAnswer: correctAnswerLists.length, wrongAnswer: correctAnswerLists.length - findTest.questionsList.length, status: correctAnswerLists.length >= 30 ? 'Pass' : 'Fail' }

        if (findUserId) {
            findUserId.testId = findUserId.testId,
                findUserId.userId = findUserId.userId,
                findUserId.questionsList = findTest.questionsList,
                findUserId.passStatus = finalData.status,
                findUserId.marksObtain = finalData.correctAnswer
            findUserId.testComplete = true
        }

        await findUserId.save();

        if (updatedQuestionWithAnswer) {
            res.status(201).json({ status: true, message: 'Result Found', data: finalData })
        } else {
            res.status(400)
            throw new Error('Invalid Question Data')
        }
    }
})

exports.getTestQuestionWithTestIdAndUserId = asyncHandler(async (req, res) => {
    const { testId, userId } = req.body

    const findTestQuestionUsingTestId = await Question.find({ testId: testId, userId: userId })

    if (findTestQuestionUsingTestId) {
        res.status(200).json({ status: true, message: 'Test Question Found', data: findTestQuestionUsingTestId })
    } else {
        res.status(204).json({ status: true, message: 'Test Question Not Found' })
    }
})