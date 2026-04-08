import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Counts the number of active users in the `users` collection.
 *
 * Pipeline stages: $match, $count
 */

const agg = [
    {
        $match: {
            isActive: true,
        },
    },
    {
        $count: "activeUsers",
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
