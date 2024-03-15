FROM node:18 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

ENV NODE_ENV="production"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

COPY --from=builder /app ./

CMD ["npm", "run", "start"]