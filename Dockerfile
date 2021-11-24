FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/library
ADD nginx/default.conf /etc/nginx/conf.d/
EXPOSE 8082
EXPOSE 443
WORKDIR /usr/share/nginx/html
RUN chmod -R a+rx *