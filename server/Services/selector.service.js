const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = `mongodb+srv://test:${process.env.DB_PASS}@cluster0.dussar6.mongodb.net/test`;

exports.getSelectorService = () => {
	// Database Name
	const dbName = 'test';

	// Create a new MongoClient
	const client = new MongoClient(url);

	const db = client.db(dbName);

	// Get the collection object
	const collection = db.collection('mycollection');

	const data = collection.find().toArray();
	console.log(data);
};
