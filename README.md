# Tasks(A Todo App)



Tasks is a cloud enabled, node.js based no sql application API, which enables users to:-

  - create a task with a title and description
  - update an existing task
  - read all the tasks created by the user
  - delete a task which is completed



### Tech

Tasks was created using:


* [node.js](https://nodejs.org/) - evented I/O for the backend
* [Express](http://expressjs.com/) - fast node.js network app framework 
* [mongoose](https://mongoosejs.com/) - a straight-forward, schema-based solution to model application data
* [pm2](https://pm2.keymetrics.io/) - for running the api without blocking the terminal
* [morgam](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js



### Installation

Tasks requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install 
$ node app.js
```

# Using the API

The API can be accessed from the localhost at port 9000 or from the link https://todo-list-hexaware.herokuapp.com 

# API Route

```sh
localhost:9000/aliens 
OR
https://todo-list-hexaware.herokuapp.com/aliens
```
