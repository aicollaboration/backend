FROM node:12.20-alpine

WORKDIR /usr/src/app

ADD package.json package.json 
RUN npm install --build-from-resource
COPY . .
RUN npm run start

FROM nginx:1.17.1-alpine
RUN apk add --update alpine-sdk
COPY node_modules /usr/src/app
COPY --from=build /usr/src/app/dist/treo /usr/share/nginx/html
