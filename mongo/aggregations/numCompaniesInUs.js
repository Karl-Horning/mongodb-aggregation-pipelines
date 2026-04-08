import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Counts the number of users whose company is located in the US.
 *
 * Pipeline stages: $match, $group
 */

const agg = [
    {
        $match: {
            "company.location.country": "USA",
        },
    },
    {
        $group: {
            _id: null,
            userCount: {
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
