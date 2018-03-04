const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const passport = require('passport');
const config = require('./config/keys.js');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

require('./models/user_model');
require('./services/passport');

User = mongoose.model('User');

mongoose.Promise = global.Promise;

// AWS.config.update({
//   accessKeyId: "AKIAI5FQC4CPTPFEDVGA",
//   secretAccessKey: "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",
//   "region": "us-west-2"
// });

//var s3 = new AWS.S3();

//const profileBucket = 'profile-bucket-atheneum123';
//const myKey = 'profile-pic-bucket';
// s3.createBucket({ Bucket: profileBucket }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     params = { Bucket: profileBucket, Key: myKey, Body: 'Test' };
//     s3.putObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Successfully loaded data');
//       }
//     });
//   }
// });

mongoose.connect(config.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  keys: [config.secret],
  maxAge: 24*60*60*1000*7
}));

app.use(passport.initialize());
app.use(passport.session());

// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: profileBucket,
//     acl: 'public-read',
//     metadata: function(req,file,cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function(req,file,cb) {
//       cb(null, Date.now().toString());
//     }
//   })
// });

require('./routes/authRoutes')(app);


if(process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('Server running on port: ' + PORT);
});