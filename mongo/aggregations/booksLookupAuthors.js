import "dotenv/config";
import { MongoClient } from "mongodb";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
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
                $first: "$author_details",
            },
        },
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("books");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
