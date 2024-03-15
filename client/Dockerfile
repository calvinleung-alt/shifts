FROM node:18 as builder

ENV NODE_ENV="production"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]