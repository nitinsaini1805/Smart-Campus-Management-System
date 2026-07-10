const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test').then(() => {
  console.log('Connected');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
