FROM node:10.13-alpine as node-angular-cli

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install 
#Angular CLI
RUN npm install -g @angular/cli@latest
CMD ng build --prod

EXPOSE 8080
CMD PORT=8080 npm start

