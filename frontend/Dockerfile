FROM node:16.3.0-alpine3.11

WORKDIR /frontend

COPY package*.json ./

ENV NODE_ENV=production

USER node

RUN npm install

COPY --chown=node:node .next .next
COPY --chown=node:node public public

RUN npm run build

EXPOSE 3000

CMD npm start