FROM node:argon

WORKDIR /app

ADD package.json /app/package.json
RUN npm install -g nodemon
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules

ADD . /app

EXPOSE 3000
CMD [ "npm", "start" ]