/**
 * @fileoverview Seeds the database by running all setup scripts via mongosh
 * in the correct order.
 *
 * Run with: npm run seed
 */

import "dotenv/config";
import { execSync } from "child_process";

const uri = process.env.MONGODB_URI;

const files = [
    "mongo/setup/users-create-collection.mongodb.js",
    "mongo/setup/users-insertMany.mongodb.js",
    "mongo/setup/books-create-collection.mongodb.js",
    "mongo/setup/books-insertMany.mongodb.js",
    "mongo/setup/authors-create-collection.mongodb.js",
    "mongo/setup/authors-insertMany.mongodb.js",
];

for (const file of files) {
    console.log(`Running ${file}...`);
    execSync(`mongosh "${uri}" --file "${file}"`, { stdio: "inherit" });
}
