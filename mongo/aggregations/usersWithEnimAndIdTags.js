import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Returns users who have both "enim" and "id" in their tags
 * array, using $all to require all specified values to be present.
 *
 * Pipeline stages: $match
 */

const agg = [
    {
        $match: {
            tags: {
                $all: ["enim", "id"],
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
