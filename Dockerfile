FROM node:12.20-alpine


# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /app/hello-world-app && cp -a /tmp/node_modules /app/hello-world-app

# Setup workdir
WORKDIR /app/hello-world-app
COPY . /app/hello-world-app

# run
EXPOSE 3000
CMD ["npm", "start"]
