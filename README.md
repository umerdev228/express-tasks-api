# Tasks API

A simple REST API for managing tasks using Express.js.

## Setup

1. Clone repository
2. Install dependencies:
```bash
npm install
```

# API Documentation
This is a simple REST API for managing tasks. Below are the available endpoints and their usage.

## Base URL
All endpoints are relative to the base URL:
```bash
http://localhost:3000
```

## Endpoints
1. Get All Tasks
   Retrieve a list of all tasks.
* URL: /tasks
* Method: GET
* Response:
  * Status Code: 200 OK
  * Body (JSON):

```bash
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description 1",
    "createdAt": "2023-09-20T12:34:56.789Z"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description 2",
    "createdAt": "2023-09-20T12:35:10.123Z"
  }
]
```
* Example
```bash
curl http://localhost:3000/tasks
```

2. Create a New Task
   Add a new task to the list.
* URL: /tasks
* Method: POST
* Request Body (JSON):
```bash
{
 "title": "New Task",
 "description": "Task Description"
}
```

* Required Fields:

  * title (string): The title of the task.
  * description (string): A brief description of the task.
* Response:
  * Status Code: 201 Created 
  * Body (JSON):
```bash
{
  "id": 3,
  "title": "New Task",
  "description": "Task Description",
  "createdAt": "2023-09-20T12:36:45.678Z"
}
```
* Error Responses:
  * Status Code: 400 Bad Request
  * Body (JSON):

```bash
{
  "error": "Title and description are required"
}
```
* Example Request:
```bash 
curl -X POST -H "Content-Type: application/json" \
  -d '{"title": "New Task", "description": "Task Description"}' \
  http://localhost:3000/tasks
```
## Error Handling
The API returns the following error responses:

1. 400 Bad Request
  * Occurs when required fields (title or description) are missing in the request body. 
  * Example Response:
```bash
  {
  "error": "Title and description are required"
}
```
2. 500 Internal Server Error

* Occurs when an unexpected server error occurs.
* Example Response:

```bash
{
  "error": "Internal Server Error"
}
```

## Example Usage
### Get All Tasks
```bash
curl http://localhost:3000/tasks
```

### Create a New Task
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"title": "Learn Express.js", "description": "Build a simple API using Express.js"}' \
  http://localhost:3000/tasks
```
### Response for Creating a Task
```bash
{
  "id": 1,
  "title": "Learn Express.js",
  "description": "Build a simple API using Express.js",
  "createdAt": "2023-09-20T12:34:56.789Z"
}
```
#### Notes
- The API uses in-memory storage, so all data will be reset when the server restarts.

