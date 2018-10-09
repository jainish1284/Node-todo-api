const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useMongoClient: true });

// var Todo = mongoose.model('Todo',{
//     text:{
//         type: String
//     },
//     completed:{
//         type: Boolean
//     },
//     completedAt:{
//         type: Number
//     }
// });

// var newTodo = new Todo({
//     text: "This is Malcom Gray !"
// });

// newTodo.save().then((doc) => {
//     console.log(doc);
// },(e) => {
//     console.log(e);
// });

// var anotherTodo = new Todo({
//     text: "Malcom Said Hi",
//     completed: true,
//     completedAt: 123
// });

// anotherTodo.save().then((doc) => {
//     console.log(doc);
// },(e) => {
//     console.log(e);
// });

var myTodoSchema = new Schema({
    text: {
      type: String,
    }
});

var myTodo = mongoose.model('myTodo',myTodoSchema);

var anotherTodo = new myTodo({
    text: "Malcom Said Hii Buddy !!!"
});

anotherTodo.save((err) => {
    if(err){
        return err
    } 
    console.log('Done !');
})