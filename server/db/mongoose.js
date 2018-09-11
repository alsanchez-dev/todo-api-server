var mongoose = require('mongoose');

var mlab = 'mongodb://udemycourse1:b0shk4b1sd3n4@ds163842.mlab.com:63842/udemy-todo';
var local = 'mongodb://localhost:27017/TodoApp'

mongoose.Promise = global.Promise;
mongoose.connect(mlab);

module.exports = {mongoose};
