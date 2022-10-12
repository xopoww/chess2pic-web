# syntax=docker/dockerfile:1

FROM alpine as clone

WORKDIR /repo
COPY . /repo/

FROM node:16-alpine as base


FROM base as build-front

WORKDIR /front
COPY --from=clone /repo/front/ .

RUN npm install
RUN npm run build


FROM base

WORKDIR /back
COPY --from=clone       /repo/back/     ./
COPY --from=build-front /front/dist/    ../front/dist/

RUN npm install

EXPOSE 9000

RUN adduser -D myuser
USER myuser

CMD [ "npm", "start" ]