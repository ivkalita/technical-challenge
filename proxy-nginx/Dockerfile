FROM nginx:1.13.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY main.conf /etc/nginx/conf.d/default.conf
COPY proxy.conf /etc/nginx/proxy.conf
COPY entrypoint.sh /entrypoint.sh

CMD ["/entrypoint.sh"]