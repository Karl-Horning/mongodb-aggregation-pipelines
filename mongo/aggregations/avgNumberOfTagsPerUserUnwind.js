import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
    {
        $unwind: "$tags",
    },
    {
        $group: {
            _id: "$_id",
            numberOfTags: {
                $sum: 1,
            },
        },
    },
    {
        $group: {
            _id: null,
            avgNumOfTags: {
                $avg: "$numberOfTags",
            },
        },
    },
];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
