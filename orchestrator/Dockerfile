FROM node:14.15.4

WORKDIR /usr/www/orchestrator

COPY . .

ENV PORT=3000

RUN npm i -g nodemon

RUN npm i && npm cache clean --force

EXPOSE 3000

CMD ["npm", "start"]