const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  text: {
    type: String,
  }
},
  {
    timestamps: true,
  }
)

const Question = mongoose.model('question', questionsSchema)

module.exports = Question;