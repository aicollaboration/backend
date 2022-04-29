FROM node:7.7-alpine
MAINTAINER Jatin Shridhar <vishnuprasand@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/express-middleware && cp -a /tmp/node_modules /opt/express-middleware

# Setup workdir
WORKDIR /opt/express-middleware
COPY . /opt/express-middleware

# run
EXPOSE 3000
CMD ["npm", "start"]




