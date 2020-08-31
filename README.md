# Lightweight wkhtmltopdf Node.js wrapper service for Docker

Based on [madnight/docker-alpine-wkhtmltopdf](https://hub.docker.com/r/madnight/docker-alpine-wkhtmltopdf/) image.

Accepts GET request with following params:
- url
- filename (optional)

Example:

GET http://localhost:8080/?url=google.com&filename=output.pdf
