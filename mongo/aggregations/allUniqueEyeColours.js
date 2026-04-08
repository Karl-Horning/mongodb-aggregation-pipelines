import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns all unique eye colours in the `users` collection.
 *
 * Pipeline stages: $group
 */

const agg = [
    {
        $group: {
            _id: "$eyeColor",
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
