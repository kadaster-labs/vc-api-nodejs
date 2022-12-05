# Build stage
FROM node:lts-alpine

# Set current working directory
WORKDIR /app

COPY ./ /app

RUN npm ci

EXPOSE 8080

ENTRYPOINT npm run start
