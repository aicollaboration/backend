FROM node:12.20-alpine
WORKDIR /usr/src/app/hello-world-app
COPY package.json ./
RUN npm install --build-from-resource
COPY . /usr/src/app/hello-world-app
RUN npm run start




