require('dotenv').config();
const mongoose = require(`mongoose`);
const uri = process.env.DB_URI;

const {MongoClient} = require('mongodb');
const db = process.env.DB_NAME;
const collection = process.env.COLLECTION;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,})
    
    .then(() => {
    console.log(`Connected to mongo`);
    })
    
    .catch((err) => {
    console.log(err);
    });

async function main(){

    const client = new MongoClient(uri);

    try {
        await client.connect();

        
        // Insert single entry
        await oneInsert(client,
            {
                walletAddress: "0xb8c0a08f3f18b804c50a7c9fa64fb6fa289ff027",
                balance: 55015.4551852577,
                staked: 1000
            }
        );

        // Insert multiple entries
        await multipleInserts(client, [
            {
                walletAddress: "0x59429282a4e566373a1f2d5f20cf08184b46ee07",
                balance: 123456,
                staked: 500
            },
            {
                walletAddress: "0xdad807f898e68b9ff6147e7ff45b438b02ddb96f",
                balance: 1000,
                staked: 250
            },
            {
                walletAddress: "0x6c344bd50784059a494020ebf0fa025223a920b6",
                balance: 420,
                staked: 69
            }
        ]);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {Object} user The new listing to be added
 */
async function oneInsert(client, user){

    const result = await client.db(db).collection(collection).insertOne(user);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

/**
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the  database
 * @param {Object[]} users The new listings to be added
 */
async function multipleInserts(client, users){
    const result = await client.db(db).collection(collection).insertMany(users);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

// https://github.com/mongodb-developer/nodejs-quickstart (evt later weghalen)