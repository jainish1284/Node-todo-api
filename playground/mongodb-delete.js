// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected Successfully");
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text:"Jainish"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:"Return Home"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({_id:new ObjectID("5bb344d773c2805296873d68")}).then((desc) => {
    //     console.log(desc);
    // });

    console.log(db.collection.count())

    client.close();
});
