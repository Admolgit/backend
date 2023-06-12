const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log('MongoDb Connected')})
  .catch((error) => {console.log('There is an error conneting mongodb' + error.message)})