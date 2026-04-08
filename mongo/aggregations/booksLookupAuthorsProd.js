import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Joins each book in the `books` collection with its author from
 * the `authors` collection. Uses $arrayElemAt instead of $first for broader
 * MongoDB version compatibility.
 *
 * Pipeline stages: $lookup, $addFields
 */

const agg = [
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "_id",
            as: "author_details",
        },
    },
    {
        $addFields: {
            author_details: {
                $arrayElemAt: ["$author_details", 0],
            },
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("books");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
