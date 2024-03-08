const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "<connection string uri>";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://juliafm:helloworld@cluster0.jgbyhks.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to database')
    const db = client.db('to-do-app')
    const taskCollection = db.collection('tasks')

})
.catch(error=> console.error(error))