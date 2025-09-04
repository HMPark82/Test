const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'bitcoinPriceDB';
let db;

const connectDB = async () => {
    if (!db) {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
    }
};

const saveBitcoinPrice = async (price) => {
    await connectDB();
    const collection = db.collection('prices');
    const result = await collection.insertOne({ price, timestamp: new Date() });
    return result;
};

module.exports = {
    saveBitcoinPrice,
};