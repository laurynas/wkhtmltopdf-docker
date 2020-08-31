# Lightweight wkhtmltopdf Node.js wrapper for Docker

[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/kurmisrainas/wkhtmltopdf)](https://hub.docker.com/r/kurmisrainas/wkhtmltopdf)

Based on [madnight/docker-alpine-wkhtmltopdf](https://github.com/madnight/docker-alpine-wkhtmltopdf) image.

Accepts GET request with following params:
- url
- filename (optional)

### Example

GET http://localhost:8080/?url=google.com&filename=output.pdf
