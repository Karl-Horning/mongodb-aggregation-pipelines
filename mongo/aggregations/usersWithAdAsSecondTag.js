import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Counts users who have "ad" as their second tag, using array
 * index notation to target a specific position in the tags array.
 *
 * Pipeline stages: $match, $count
 */

const agg = [
    {
        $match: {
            "tags.1": "ad",
        },
    },
    {
        $count: "usersWithAdAsSecondTag",
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
