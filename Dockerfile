FROM node:12.20-alpine


# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /app && cp -a /tmp/node_modules /app

# Setup workdir
WORKDIR /app
COPY . /app

# run
EXPOSE 3000
CMD ["npm", "start"]
