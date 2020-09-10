const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost/node-arreglos-db';


mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
