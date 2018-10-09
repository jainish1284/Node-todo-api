// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected Successfully");
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({text:"Jainish"},{text:"Jainish Chnaged It."}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndUpdate({
    //     text:"Jainish"
    // },{
    //     $set:{
    //         text:"Jainish Changed It Buddy !!!"
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        name: "Ved"
    },{
        $set:{
            name : "Ved Perry"
        },$inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});
