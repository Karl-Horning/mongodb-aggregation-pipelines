import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Groups users by their favourite fruit, returning each fruit
 * alongside an array of the users who prefer it.
 *
 * Pipeline stages: $group
 */

const agg = [
    {
        $group: {
            _id: "$favoriteFruit",
            users: {
                $push: "$name",
            },
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
