FROM nginx:1.13.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy.conf.template /etc/nginx/conf.d/proxy.conf.template
COPY proxy.conf /etc/nginx/proxy.conf
RUN echo $AUTH_APP_HOST && echo $AUTH_APP_PORT && echo $MAIN_PORT && envsubst '\$AUTH_APP_HOST \$AUTH_APP_PORT \$MAIN_PORT' < /etc/nginx/conf.d/proxy.conf.template > /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]