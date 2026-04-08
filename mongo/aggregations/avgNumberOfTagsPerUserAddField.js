import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Calculates the average number of tags per user using $addFields
 * to compute each user's tag count before grouping.
 *
 * Pipeline stages: $addFields, $group
 */

const agg = [
    {
        $addFields: {
            numberOfTags: {
                $size: {
                    $ifNull: ["$tags", []],
                },
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
