import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns user counts grouped by country, sorted in descending
 * order to show which countries have the most registered users.
 *
 * Pipeline stages: $group, $sort
 */

const agg = [
    {
        $group: {
            _id: "$company.location.country",
            count: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            count: -1,
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
