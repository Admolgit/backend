const Question = require('../models/questionaire.models')

module.exports.createQuestion = async (req, res) => {
  try {
    const {question} = req.body;

    if(!question) {
      throw new Error("All fields are required");
    }
    
    const questions = new Question({
      question: question,
    });

    const questionSaved = await questions.save()

    return res.status(201).json({
      message: 'Message successfully created',
      data: questionSaved
    })
    
  } catch (error ) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}

// Get all questions from the database
module.exports.getQuestion = async (req, res) => {
  try {
    const questions = await Question.find({});

    if(!questions.length) {
      res.status(404).json({
        message: "No questions found"
      })
    }

    return res.status(200).json({
      message: "questions fetched successfully",
      length: questions.length,
      data: questions
    })
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}