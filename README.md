# Events with tickets app

This app was a final project at Codaisseur Full-Stack Webdevelopment Academy. 

### Description
At this point the app lets users sign up, sign in, add events and comments via HTTPie and display the events, tickets and comments from the client side.

**Endpoints:**
LOGINS:
`POST /logins`: login with email and password. Returns JWT token that's valid for 4 hours.
USERS:
`GET /users/:id`: gets the current user with all the comments and tickets created. JWT token required.
`GET /users`: gets all users with all the comments and tickets created respectively. JWT token required.
`POST /users`: creates a new user.
EVENTS:
`GET /events`: gets all events. 
`POST /events`: creates new event. JWT token required.
TICKETS:
`GET /events/:event_id/tickets`: gets all the tickets for a specified event.
`GET /events/:event_id/tickets/:ticket_id`: gets a single ticket for a specified event.
COMMENTS:
`GET /events/:event_id/tickets/:ticket_id/comments`: gets all comments for a specified ticket.
`POST /events/:event_id/tickets/:ticket_id/comments`: creates comment for a specified ticket. JWT token required. 


### Setup
`yarn install` both for client and server side to install the dependencies
`yarn start` to run both the server and client
Make sure you have a PostgreSQL database running, preferably empty.
Access endpoints with HTTPie commands on `localhost:4000`

### Built with
- React 
- Redux
- Javascript
- TypeScript
- TypeORM
- koa
- routing-controllers

### License
MIT License - Copyright © 2018 - Katarzyna Caboń
