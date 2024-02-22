import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
    {
        $sort: {
            registered: -1,
        },
    },
    {
        $limit: 5,
    },
    {
        $project: {
            name: 1,
            registered: 1,
            isActive: 1,
        },
    },
];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
