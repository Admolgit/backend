const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

// This allows to use properties in our .env file created in the project
dotenv.config();

require('./config/db');

const vehicleRouter = require('./routes/vehicle.routes');
const questionnaireRouter = require('./routes/questionnaire.routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/v1', vehicleRouter)
app.use('/api/v1', questionnaireRouter)

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Server working perfectly'
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})