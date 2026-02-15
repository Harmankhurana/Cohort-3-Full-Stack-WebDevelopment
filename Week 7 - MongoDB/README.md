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