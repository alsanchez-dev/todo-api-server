const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ba467c7e5ab0ffc0a4d98db'}).then((todo)=>{
    console.log('********', todo);
});

Todo.findByIdAndRemove('5ba467c7e5ab0ffc0a4d98db').then((todo)=>{
    console.log('**************', todo);
});
