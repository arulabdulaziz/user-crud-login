FROM node:14.15.4

WORKDIR /usr/www/services-users

COPY . .

ENV PORT=3001

RUN npm i -g nodemon

RUN npm i && npm cache clean --force

EXPOSE 3001

CMD ["npm", "start"]