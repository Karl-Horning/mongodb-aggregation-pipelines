import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns the 5 most recently registered users, including their
 * name, registration date, and active status.
 *
 * Pipeline stages: $sort, $limit, $project
 */

const agg = [
    {
        $sort: {
            registered: -1,
        },
    },
    {
        $limit: 5,
    },
    {
        $project: {
            name: 1,
            registered: 1,
            isActive: 1,
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
