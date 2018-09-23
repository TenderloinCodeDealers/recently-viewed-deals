# What image do you want to start building on?
FROM node:8

# Tell your container where your app's source code will live
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

#to bundle our app's source code inside the docker image
COPY . .

#app binds to port 8080
EXPOSE 8080

#this is defining the command to run our app 
#this says "use the basic npm start which will run node server.js to start your server:"
CMD [ "npm", "start" ]