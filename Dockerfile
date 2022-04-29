FROM node:12.20-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --build-from-resource
COPY . .
RUN npm run start




