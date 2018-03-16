# Assignment task

## Task

1. Design a database schema to record customer’s information:
	* First name
	* Last name
	* Email address
	* Password
	* Date of birth
	* 8 alphanumeric policy code
	* Genetic result
2. Design  a  RESTful  service  so  that  customers  may
	* Login and logout
	* Retrieve personal data
	* Retrieve genetic result
3. Design a Web frontend application to serve the content provided by the RESTful service

## Services

I decided to implement this system using SOA, cause of such benefits:
- Easy scalability: you can run as many instance of each service as you wish.
- Flexibility: any service may be easily refactored, plugged/unplugged, turned on or off.
- You can implement different parts of the system using different technology stack (you can pick right tools for specific problems)

### 1. Auth application

Central auth application, that stores customer's data and access tokens. Based on Python3.6, Django, DRF and allauth. Provides simple REST API for login/logout/registration/password resetting and retrieving the information about the authenticated user.

### 2. Auth database

PostgreSQL database backend for auth application. For the demo purposes and "one-line startup without dependencies", PostgreSQL stored in container without volume mounting.

### 3. Nginx proxy

Front nginx. Entry point for all incoming traffic, also serves front-end application (that's not right).

### 4. Genetic result worker

Not implemented yet.

Worker that calculates/process users data and returns a genetic result (puts it into queue in RabbitMQ). Unfortunately, still not implemented, so fake data generated using migrations.

### 5. Genetic result API

Application, that provides REST API for getting user's genetic result and that responsible for genetic results storage.

### 6. Front-end application
Angular-based application that allows user to login/logout/sign up and get his genetic result.

## Installation

All these components are implemented as docker containers. There is single `docker-compose.yml` that allow you to run the whole components together using only one command. Ofcourse, it's a bad idea to use such approach in production. For more information about what should be changed – read TODO.md

```bash
$ git clone https://github.com/kaduev13/technical-challenge.git
$ cd technical-challenge
$ docker-compose up --force-recreate --build
```
After that command execution, just open your browser and go to localhost:8991.

## Testing
Unfortunatelly, no tests at all – implementation took a lot of time – much more than I expected.
