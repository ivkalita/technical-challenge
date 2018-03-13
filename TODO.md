# List of TODOs

## Deployment

* Add additional cleaning for the applications – remove dev-dependencies after installing uwsgi
* Remove MIGRATIONS from `/auth/start-backend.sh`. This command should be executed during the CI. Unfortunately, I have no CI there, so it'll be just called on startup.