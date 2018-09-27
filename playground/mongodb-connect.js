// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// console.log(MongoClient);

// var obj = new ObjectID();
// console.log(obj);

// var data = {name: "Jainish",age: 21};
// var {name} = data;
// console.log(name);

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
//     if(err) {
//         return console.log("Unable to connect to MongoDB");
//     }
//     console.log("Connected Successfully");
    
//     db.collection('Todos').insertOne({
//         text: "Jainish",
//         completed: false
//     },(err, result) => {
//         if(err) {
//             return console.log('Unable To Insert'+ err);
//         }
//         console.log(JSON.stringify(result, undefined, 2));
//     });

//     db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected Successfully");
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: "Jainish",
        completed: false
    },(err, result) => {
        if(err) {
            return console.log('Unable To Insert'+ err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    client.close();
});

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if(err) {
//         return console.log("Unable to connect");
//     }
//     console.log("Connected");

//     const db = client.db('TodoApp');
//     db.collection('Users').insertOne({
//         name: "Jainish",
//         age: 21,
//         location: "Ahmedabad"
//     },(err, result) => {
//         if(err) {
//             return console.log("Unable to insert Data");
//         }
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     });

//     client.close();
// });