FROM node:17 

WORKDIR /home/app/api 

COPY package.json package-lock.json ./

COPY . . 

RUN npm install 

EXPOSE 9001 