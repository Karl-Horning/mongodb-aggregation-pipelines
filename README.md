# MongoDB aggregation pipelines

At a previous role, reporting ran against a replica database rather than production. Extracting meaningful stats from it meant writing aggregation pipelines — something I hadn't needed before, having worked primarily with SQL. I built this repo to get comfortable with the syntax and semantics before applying it in a live context.

The scripts cover a range of pipeline stages — `$match`, `$group`, `$sort`, `$limit`, `$project`, `$lookup`, `$addFields`, `$unwind`, and `$count` — across a `users` collection and a `books` collection with a related `authors` collection to demonstrate joins via `$lookup`.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [mongosh](https://www.mongodb.com/docs/mongodb-shell/install/)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, or a connection string for a remote or Atlas instance

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   Update `MONGODB_URI` in `.env` if you're not running MongoDB locally on the default port.

3. Seed the database:

   ```bash
   npm run seed
   ```

## Running an aggregation

```bash
node mongo/aggregations/<script-name>.js
```

For example:

```bash
node mongo/aggregations/avgUserAge.js
```

## Project structure

```text
/
├── mongo/
│   ├── aggregations/    # Aggregation pipeline scripts (Node.js Driver)
│   └── setup/           # Collection creation and seed data (MongoDB Playground)
├── scripts/
│   └── seed.js          # Seeds the database via mongosh
├── .env.example
└── package.json
```

## Licence

MIT 2024 © [Karl Horning](https://github.com/Karl-Horning)
