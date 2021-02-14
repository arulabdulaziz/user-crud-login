FROM node:14.15.4

WORKDIR /usr/www/orchestrator

COPY . .

ENV PORT=3000

RUN npm i -g nodemon

RUN npm i -g sequelize

RUN npm i -g sequelize-cli

RUN npm i && npm cache clean --force

RUN sequlize db:create

RUN sequelize db:migrate

RUN sequelize db:seed:all

EXPOSE 3000

CMD ["npm", "start"]