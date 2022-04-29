
FROM node:7.7-alpine


ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN npm run start


FROM nginx:1.17.1-alpine
RUN apk add --update alpine-sdk
RUN mkdir -p /opt/hello-world-app && cp -a /tmp/node_modules /opt/hello-world-app
WORKDIR /opt/hello-world-app
COPY . /opt/hello-world-app


