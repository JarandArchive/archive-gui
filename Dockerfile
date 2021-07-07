FROM node:16.3.0-slim AS build

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY src/ src/
COPY public/ public/
RUN npm run build

FROM nginx:1.21.0

COPY --from=build build/ /etc/nginx/html/build/

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
