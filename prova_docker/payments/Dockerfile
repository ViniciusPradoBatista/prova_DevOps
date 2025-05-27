FROM php:8.1-cli-alpine

WORKDIR /app

COPY . .

EXPOSE 3003

CMD ["php", "-S", "0.0.0.0:3003", "-t", "/app"]