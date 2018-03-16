# Answers on questions :)

### 1. The database design

* There are 2 databases – one for storing users/tokens/emails (auth-db) and one for storing the genetic results (api-db). Both of databases are PostgreSQL 10.3.
* Auth-db stores sensitive information about users. All the passwords are salted and hashed.
* Both databases SHOULD NOT be runned inside the docker containers. But, if you still want to do it (in production) you need to mount the data volume, install some kind of pool (in front of postgresql instances).
* Some security issues – databases MUST be available only inside the LAN, database users should be different (and they MUST not be default postgres user).
* Concurrency – there are no issues with concurrency in current database scheme.

### 2. The API design

* All API separates on two parts: authentication and results. So I decided to implement 2 services – one for each responsibility.
* Service AUTH provides [django-rest-auth API endpoints](http://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html) (smally modified for our needs).
* Service API provides only one resouce – `results`, and only 2 methods: GET list of current's user results and get user's result by id.
* Security – I'm not sure about django-rest-auth and django-allauth packages – I've never used them before, but it looks great – embedded auth throttling, emails, social networks. May be I should tune some parameters to improve security or performance.

### 4. Scalability
* You can just start so many instances of every part of the system, as you want (cause they all are microservices).
* You can do it using docker-compose, but I'll suggest you to use something more powerfull in production (orchestrators).

### 5. Starting the services
* These instructions are in README.md.

### 6. Testing strategy
Unfortunately, there are exactly 0 tests in this system. Implementation took much more time than I expected, so I decided to "just implement the proof of concept" and then improve it. So.. No tests :(
But, I think that this infrastructure (in docker-compose) is really useful for integration tests – databases/message brokers/servers/systems – all are there, so we just need to start up this system and then run selenium tests/postman collections against it (for example).

