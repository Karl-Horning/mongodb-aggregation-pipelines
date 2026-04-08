import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns the name and age of inactive users who have the
 * "velit" tag.
 *
 * Pipeline stages: $match, $project
 */

const agg = [
    {
        $match: {
            isActive: false,
            tags: "velit",
        },
    },
    {
        $project: {
            name: 1,
            age: 1,
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
