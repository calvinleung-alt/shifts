FROM node:18 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start:prod"]