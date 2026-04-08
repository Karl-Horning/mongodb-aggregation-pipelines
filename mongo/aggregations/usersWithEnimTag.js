import { MongoClient } from "mongodb";

/**
 * @fileoverview Counts users who have "enim" in their tags array.
 *
 * Pipeline stages: $match, $count
 */

const agg = [
    {
        $match: {
            tags: "enim",
        },
    },
    {
        $count: "usersWithEnimTag",
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
