ARG NODE_VERSION
ARG PORT
FROM node:$NODE_VERSION
WORKDIR /usr/src/app
COPY . .
EXPOSE $PORT
