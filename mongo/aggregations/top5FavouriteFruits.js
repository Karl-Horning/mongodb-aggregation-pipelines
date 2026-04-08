import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns the top 5 most popular favourite fruits across all
 * users, sorted by count in descending order.
 *
 * Pipeline stages: $group, $sort, $limit
 */

const agg = [
    {
        $group: {
            _id: "$favoriteFruit",
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
    {
        $limit: 5,
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
