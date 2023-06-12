const express= require('express');
const { createQuestion, getQuestion } = require('../controllers/questionnaire.controllers');

const questionnaireRouter = express.Router();

questionnaireRouter.post('/questionnaire', createQuestion);
questionnaireRouter.get('/questionnaire', getQuestion)

module.exports = questionnaireRouter;