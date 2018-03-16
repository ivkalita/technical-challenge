# List of TODOs

There are a lot of things that should be implemented better. 

* Add additional cleaning for the applications – remove dev-dependencies after installing uwsgi (it'll reduce python containers size from 320 mb to 17-20 mb). 
* Remove MIGRATIONS from `/auth/start-backend.sh`. This command should be executed during the CI. Unfortunately, I have no CI there, so migrations will be applied on startup.
* Improve nginx container. IMHO, I should move all the ports and hosts to general environment file (in case of docker-compose) and pass some of these variables to nginx configuration (using `envsubst` for example). I tried to do it, but it didn't work and I didn't have enough time to figure it out.
* Remove duplicated "entrypoints" for python-based applications. May be I need to implement some kind of `entrypoint.sh` template for python applications and dynamically include this script into the container? Anyway, the fact that two different services uses two absolutally identical files as entrypoints means that I should do something with it.
* Setup normal angular application build process. Ideally, builds should be stored in private npm repo.
* Move each component to it's own repository.
* Implement tests for every component. Implement the system for integration testing (selenium?)
