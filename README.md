# MongoDB Aggregation Pipelines

---

## Table of Contents

- [MongoDB Aggregation Pipelines](#mongodb-aggregation-pipelines)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Seeding collections](#seeding-collections)
    - [Running aggregations](#running-aggregations)
  - [Dependencies](#dependencies)
  - [To Do](#to-do)
  - [FAQ](#faq)
  - [Licence](#licence)
  - [Author](#author)

---

## Overview

This project includes example scripts for working with MongoDB collections using the MongoDB Node.js Driver. It covers both collection creation (including advanced options like capped and time series collections) and aggregation pipelines written in JavaScript.

---

## Project structure

```text
/
├── aggregations/        # Scripts using aggregation pipelines with Node.js
│   └── *.js
├── create/              # Scripts to create collections using db.createCollection()
│   └── *.js
```

---

## Installation

Install the MongoDB Node.js Driver if not already installed:

```bash
npm install mongodb
```

---

## Usage

### Seeding collections

1. Open a script in the `create/` folder.
2. Update the `database` and `collection` names as needed.
3. Run the script in a MongoDB shell or through a Node.js environment that supports direct MongoDB shell commands.

Refer to the [MongoDB `createCollection()` docs](https://www.mongodb.com/docs/manual/reference/method/db.createCollection/) for further customisation.

---

### Running aggregations

1. Open a script in the `aggregations/` folder.
2. Ensure your MongoDB connection string is set correctly.
3. Edit the `agg` variable to define your aggregation pipeline.
4. Run the script using Node.js:

```bash
node aggregations/example.js
```

---

## Dependencies

- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native)

---

## To Do

- [ ] Add `.env` support for connection strings
- [ ] Include example output or test data
- [ ] Add pipelines for `$facet`, `$graphLookup`, and `$lookup` examples
- [ ] Add performance profiling notes

---

## FAQ

**Q: Can I use this with Atlas or a remote MongoDB instance?**
A: Yes. Update the connection string to use your remote URI.

**Q: Are the scripts safe to run in production?**
A: They're educational examples and should be reviewed before any production use.

---

## Licence

MIT © Karl Horning

---

## Author

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)
