const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/posts');


app.use('/post' , postRoutes);

app.use(bodyParser.json({limit:"30mb" , extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:"true"}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://adhiraj:adhirajA@1@cluster0.dtbq7.mongodb.net/Cluster0?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

const client = new MongoClient(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true , serverApi: ServerApiVersion.v1});

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))
    .catch((error)=> console.log(error.message)));

client.connect ( err => {
    const collection = client.db("firstapplication").collection("program1");
    client.close();
})

    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const uri = "mongodb+srv://adhiraj:<password>@cluster0.dtbq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   console.log(collection , " is the collection");
    //   // perform actions on the collection object
    //   client.close();
    // });


// mongoose.set('useFindAndModify' , false);


