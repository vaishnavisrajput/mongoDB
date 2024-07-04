const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/db'; // Use your MongoDB connection string
const client = new MongoClient(url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

// Database Name
const db = 'myDatabase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(db);

  // The following code examples can be inserted here

  // Close the connection
  await client.close();
}

main().catch(console.error);

/*const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/db'; // Replace 'db' with your database name

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB server');
}).catch((err) => {
    console.error('Initial MongoDB connection error:', err);
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Mongoose connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

// Handle process termination (SIGINT)
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
});

// Exporting the db file for use in the server
module.exports = db;





/*const mongoose = require('mongoose');

//define the MongoDB connection URL 
const mongoURL = 'mongodb://localhost:27017/db' //Replace mydatabase with your database name

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
})

//get the defaukt connection
const db = mongoose.connection;

//define event listeners for database connection

db.on('connected', () =>{
    console.log('Connected to MongoDB server');
});

db.on('error', (err) =>{
    console.log('MongoDB connection error:' , err);
});

db.on('disconnected', () =>{
    console.log('MongodDB disconnected');
});

//exporting the db file in server

module.exports = db;
*/