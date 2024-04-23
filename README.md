# MongoDB Aggregation Pipelines

This repository contains scripts to seed MongoDB collections and perform aggregations using MongoDB's Node.js Driver.

## Seed Data

The `create` folder contains scripts to seed MongoDB collections. These scripts utilize the `db.createCollection()` command to create collections in the specified database. Each script is structured to create a collection with customizable options, such as capped collections, validation rules, and time series configurations.

### Usage

To use the seed scripts:

1. Open the desired script in a MongoDB environment.
2. Modify the `database` and `collection` variables to specify the target database and collection name.
3. Execute the script to create the collection with the specified options.

For more information on the `createCollection` command, refer to the [MongoDB Documentation](https://www.mongodb.com/docs/manual/reference/method/db.createCollection/).

## Aggregations

The `aggregations` folder contains scripts to perform aggregations on MongoDB collections. These scripts utilize the MongoDB Node.js Driver to connect to a MongoDB instance, execute aggregation pipelines, and retrieve results.

### Usage

To use the aggregation scripts:

1. Open the desired script in a Node.js environment.
2. Ensure the MongoDB Node.js Driver is installed.
3. Modify the aggregation pipeline (`agg`) to define the desired aggregation operations.
4. Update the MongoDB connection string to point to your MongoDB instance.
5. Execute the script to perform the aggregation and retrieve the results.

### Dependencies

- MongoDB Node.js Driver: [MongoDB Node.js Driver Documentation](https://mongodb.github.io/node-mongodb-native)

## Contact

For any inquiries or support related to this project, please contact Karl Horning.

## Author

Karl Horning: [GitHub](https://github.com/Karl-Horning/) | [LinkedIn](https://www.linkedin.com/in/karl-horning/) | [CodePen](https://codepen.io/karlhorning)