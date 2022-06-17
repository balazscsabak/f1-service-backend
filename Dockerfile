FROM node:18-slim AS builder
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY public ./public
RUN npm install
COPY ./src ./src
RUN npm run build

FROM node:18-slim 
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY public ./
RUN npm install
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3001
CMD npm start