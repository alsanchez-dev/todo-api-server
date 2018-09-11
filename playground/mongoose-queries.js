const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// var id = '5b9c7f5b34dae5fa8290af23';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));

// var pushingthisImtired = new User({
//     email: 'finallyUnderstanding@mongooseBosh.com'
// })
//
// pushingthisImtired.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }).catch((e)=>{
//     console.log(e)
// });

// var databaseEntry = new Todo({
//     text: 'This is a second todo for the mlab database'
// });
// databaseEntry.save().then((todo)=>{
//     console.log('This has been saved :D', todo);
// }).catch((e)=>{
//     console.log(e)
// });

// var todayTodo = new Todo({
//     text: 'Ask Boshka how is everything going'
// });
//
// todayTodo.save().then((param)=>{
//     console.log('new todo added', param);
// }).catch((e)=>{
//     console.log(e);
// })


User.findById('5ba1b711a33cabc4dee8445b').then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e)=>{console.log(e)});
