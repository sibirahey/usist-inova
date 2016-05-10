FROM node:argon

# Create app directory
RUN mkdir -p /app/src
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
WORKDIR /app/src
COPY ./src /app/src/

EXPOSE 3000
CMD [ "npm", "start" ]