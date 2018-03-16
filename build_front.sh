#!/usr/bin/env sh
cd front
ng build --env=prod
cd ../proxy-nginx
rm -rf front_dist
cp  -R ../front/dist/ front_dist
