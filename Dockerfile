FROM node:12.20-alpine

WORKDIR /usr/src/app

ADD package.json package.json 
RUN npm install --build-from-resource

RUN mkdir -p /usr/src/app && cp -a node_modules /usr/src/app

COPY . /usr/src/app
RUN npm run start




