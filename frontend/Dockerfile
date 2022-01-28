FROM node:17 

WORKDIR /home/app/frontend 

COPY package.json package-lock.json ./

COPY . .

RUN npm install 

EXPOSE 3000