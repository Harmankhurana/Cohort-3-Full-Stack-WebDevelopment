# MongoDB
[https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e](https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e)

# Context

Code for today - https://github.com/100xdevs-cohort-3/week-7-mongo

In today’s class, we’ll understand about `databases` , and more specifically `NoSQL` databases. 

We’ll learn about MongoDb and how you can use it to persist data in your full stack app.

## Things to learn

1. Creating a free mongo db cloud server
2. Connecting your full stack application to MongoDb
3. Defining the schema
4. mongoose
5. CRUD operations (Create, Read, Update, and Delete)

# What are databases

Databases are organized collections of data that are structured to enable efficient storage, retrieval, and management of information.

Whenever you create a `full stack app` , you  `persist` data in `databases`. 

For example - 

1. User information
2. TODOs of your todo app
3. Posts for facebook
4. Tweets for twitter …
![Frontend, backend and database](./images/image.png)

## Types of databases

- **Relational Databases**: Use tables to store data and relationships between data (e.g., MySQL, PostgreSQL).
- **NoSQL Databases**: Designed for more flexible data models and often used for big data or real-time web applications (e.g., MongoDB).
- **Graph Databases**: Store data in nodes and edges to represent relationships (e.g., Neo4j).
- **Vector Databases**: Used in ML to store data in the form of embeddings

Today we’ll be learning about `MongoDB` which is a `NoSQL Database`

# MongoDB and NoSQL databases

NoSQL databases are a broad category of database systems that diverge from the traditional relational model used in SQL databases. 

They are designed to handle a variety of data models and workloads that may not fit neatly into the tabular schema of relational databases.

- MongoDB is schema less

## Properties

- **Schema Flexibility:** NoSQL databases often allow for a flexible schema, meaning you can store data in formats that don't require a fixed structure.
- **Scalability:** Many NoSQL databases are designed to scale out horizontally (increase the number of instance), making it easier to distribute data across multiple servers and handle large volumes of traffic.

# MongoDB

MongoDB is a NoSQL database that uses a document-oriented approach. Data is stored in flexible, JSON-like documents, which can have nested structures and varied fields.
![MongoDB cluster](./images/image%20copy.png)
![MongoDB cluster](./images/image%20copy%202.png)
# Creating a free MongoDB Server

1. Signup on https://cloud.mongodb.com/
2. Create a `free M0` cluster
3. Create a `User`
4. Install MongoDB compass
5. Put the connection URL to connect to the database
![MongoDB server](./images/image%20copy%203.png)
## Connection string
![Connection string](./images/image%20copy%204.png)

# Seeding data in the DB

Lets put some data in the `Cluster` manually

1. Create a new `Database` called `todo-app`
2. Create two collections inside it
    1. `users`
    2. `todos`
3. Seed some data inside the collections

# Users table
![user table](./images/image%20copy%205.png)

# TODO table
![todo table](./images/image%20copy%206.png)

# CRUD Operations

CRUD operations in MongoDB refer to the basic operations you can perform on documents within a MongoDB database. CRUD stands for:

1. **Create**: Adding new documents to a collection.
2. **Read**: Retrieving documents from a collection.
3. **Update**: Modifying existing documents in a collection.
4. **Delete**: Removing documents from a collection.
- Here Backend talks to the Database
![crud Operations](./images/image%20copy%207.png)

# Mongoose

- Mongoose is a popular **Object Data Modeling (ODM) library** for MongoDB and Node.js. Think of it as a bridge between your Node.js application and MongoDB database.
- Helps in creating schemas and models
- **Schema Definition** - You define the structure of your data:
```
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});
```