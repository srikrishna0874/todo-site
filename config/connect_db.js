const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo').then((res) => {
    console.log('mongodb connected successfully');
}).catch((err) => {
    console.log('error in connecting mongodb ', err);
});

module.exports = mongoose;