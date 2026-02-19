## Create a course selling app
- Initialize a new Node.js project
- Add Express, jsonwebtoken, mongoose to it as a dependency
- Create index.js
- Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
- Add routes for admin login, admin signup, create a course, delete a course, add course content.
- Add middlewares for user and admin auth
- Add a database (mongodb), use dotenv to store the database connection string
- Define the schema for User, Admin, Course, Purchase
- Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure your routes)
- Create the frontend

# Routing in Express

- Routing in [**Express.js**](https://expressjs.com/en/guide/routing.html) is **the process of determining how an application responds to a client request for a specific endpoint (a URI path) and HTTP method (GET, POST, PUT, DELETE, etc.)**.
- One way to do routing is to put different routes in routes folders and export them from there
- and then import all the routes in index.js
- User Routes -

```jsx
function createUserRoutes(app) {
	app.post('/user/signup', async function (req, res) {

	});

	app.post('/user/signin', async function (req, res) {

	});

	app.get('/user/purchases', async function (req, res) {
    
	});
}

module.export({
	createUserRoutes: createUserRoutes,
	});
```

- Course Routes -

```jsx
function createCourseRoutes (app) {
	app.post('/course/purchase', async function (req, res) {
    
	});

	app.get('/courses', async function (req, res) {
    
	});
}

module.export({
	createCourseRoutes: createCourseRoutes 
})
```

- Importing these routes in index.js
``` jsx
	const { createUserRoutes } = require("./routes/user");
	const { createCourseRoutes } = require("./routes/course");
	
	createUserRoutes(app);
	createCourseRoutes(app);
``` 