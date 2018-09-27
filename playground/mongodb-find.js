// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected Successfully");
    const db = client.db('TodoApp');
    
    // db.collection('Users').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch Todos'+ err);
    // });
    
    // db.collection('Users').find({location: "Barcelona"}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch Todos'+ err);
    // });
    
    db.collection('Users').find({
        _id: new ObjectID('5baca7c1682c3c54b884f077')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Unable to fetch Todos'+ err);
    });

    client.close();
});
