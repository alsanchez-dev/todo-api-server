var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://udemycourse1:b0shk4b1sd3n4@ds163842.mlab.com:63842/udemy-todo');

module.exports = {mongoose};
