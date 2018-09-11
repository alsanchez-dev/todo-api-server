// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
     return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b9c4b72273149d5952e49a9')
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

   // db.collection('Users').findOneAndUpdate({
   //     name: 'Boshka'
   // }, {
   //     $set: {
   //         name: 'Boshka Nieves'
   //     }
   // }, {
   //     returnOriginal: false
   // }).then((result)=>{
   //     console.log(result);
   // })

     db.collection('Users').findOneAndUpdate({
         _id: new ObjectID('5b99e8ae771d4c43837bc523')
     }, {
         $inc: {age: -24}
     }, {
         returnOriginal: false
     }).then((result)=>{
         console.log(result);
     });

    // db.close();
});
