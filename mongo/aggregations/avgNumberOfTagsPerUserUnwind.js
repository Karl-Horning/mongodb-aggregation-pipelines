import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Calculates the average number of tags per user by unwinding
 * the tags array and counting entries per document before grouping.
 *
 * Pipeline stages: $unwind, $group
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

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
