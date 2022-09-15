# syntax=docker/dockerfile:1
FROM node:16-alpine

WORKDIR /nextjs-blog

COPY package.json yarn.lock ./

RUN yarn

COPY next.config.js ./next.config.js
COPY next-env.d.ts ./next-env.d.ts
COPY tsconfig.json ./tsconfig.json

CMD [ "yarn", "dev"]