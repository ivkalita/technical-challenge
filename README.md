# Example of simple microservices system

## Task

1. Design a database schema to record customer’s information:
	a. First name
	b. Last name
	c. Email address
	d. Password
	e. Date of birth
	f. 8 alphanumeric policy code
	g. Genetic result
2. Design  a  RESTful  service  so  that  customers  may
	a. Login and logout
	b. Retrieve personal data
	c. Retrieve genetic result
3. Design a Web frontend application to serve the content provided by the RESTful service

## Architecture
Nice picture here (TBD)

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

Front nginx. Entry point for all incoming traffic.

### 4. Genetic result worker

Not implemented yet.

Worker that calculates/process users data and returns a genetic result (puts it into queue in RabbitMQ). For now it just generates fake data for every user.

### 5. Genetic result application

Not implemented yet.

Application, that provides REST API for getting user's genetic result.

### 6. RabbitMQ

Main message broker.

## Installation

```bash
$ docker-compose up --force-recreate --build
```

## Testing
TBD

## Roadmap
TBD
