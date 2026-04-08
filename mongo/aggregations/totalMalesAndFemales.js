import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns the total count of male and female users in the
 * `users` collection.
 *
 * Pipeline stages: $group
 */

const agg = [
    {
        $group: {
            _id: "$gender",
            count: {
                $sum: 1,
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
