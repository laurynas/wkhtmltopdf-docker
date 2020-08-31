FROM madnight/docker-alpine-wkhtmltopdf
MAINTAINER Laurynas Butkus <laurynas.butkus@gmail.com>

RUN apk add --update nodejs

USER 33:33
EXPOSE 8080

WORKDIR /app

COPY server.js /app

ENTRYPOINT [ "node", "server.js" ]