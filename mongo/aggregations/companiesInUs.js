import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns company contact details for users whose company is
 * located in the US.
 *
 * Pipeline stages: $match, $project
 */

const agg = [
    {
        $match: {
            "company.location.country": "USA",
        },
    },
    {
        $project: {
            "company.title": 1,
            "company.email": 1,
            "company.phone": 1,
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
