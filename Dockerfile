FROM node:14.17.0-alpine3.12

RUN ["apk" , "add", "--update" ,"curl",  "py-pip" ,"make" , "g++"]

COPY ./package.json ./

RUN [ "yarn", "install"]

COPY . .

RUN [ "npm", "run", "build" ]

CMD [ "npm", "run", "express" ]