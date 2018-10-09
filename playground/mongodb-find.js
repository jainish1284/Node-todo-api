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
    
    db.collection('Users').find({name:"Shreyal"}).count().then((count) => {
        console.log(`Todos Count:${count}`);
    },(err) => {
        console.log('Unable to fetch Todos'+ err);
    });

    db.collection('Users').find({name:"Shreyal"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Unable to Fetch'+ err);
    });

    client.close();
});
