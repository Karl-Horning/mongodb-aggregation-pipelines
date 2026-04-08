import "dotenv/config";
import { MongoClient } from "mongodb";

/**
 * @fileoverview Counts users whose company phone number starts with +1 (940),
 * using a regex match on the phone field.
 *
 * Pipeline stages: $match, $count
 */

const agg = [
    {
        $match: {
            "company.phone": {
                $regex: "^\\+1\\s*\\(940\\)",
            },
        },
    },
    {
        $count: "numUsersWithPhoneNumber",
    },
];

const client = await MongoClient.connect(process.env.MONGODB_URI);
const coll = client.db("testData").collection("users");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(JSON.stringify(result, null, 2));
await client.close();
