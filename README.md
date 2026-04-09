# MongoDB aggregation pipelines

I built this repo to learn MongoDB aggregation pipelines. My previous role ran reporting against a replica database, and I needed to get comfortable with the syntax before using it in production. I'd worked primarily with SQL up to that point.

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
