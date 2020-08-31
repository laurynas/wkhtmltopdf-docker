FROM madnight/docker-alpine-wkhtmltopdf
MAINTAINER Laurynas Butkus <laurynas.butkus@gmail.com>

RUN apk add --update nodejs

USER 80:80
EXPOSE 8080

WORKDIR /app

COPY server.js /app

ENTRYPOINT [ "node", "server.js" ]