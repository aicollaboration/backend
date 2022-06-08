FROM node:12.20-alpine

RUN apk add --update alpine-sdk
# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --build-from-resource

# Copy deps
RUN mkdir -p /opt/express-middleware && cp -a /tmp/node_modules /opt/express-middleware

# Setup workdir
WORKDIR /opt/express-middleware
COPY . /opt/express-middleware

# run
EXPOSE 80
CMD ["npm", "start"]




