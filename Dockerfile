FROM node:8.9.4-alpine as node

ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json package.json
RUN yarn install

RUN mkdir /frontend/
WORKDIR /frontend/
ADD . /frontend
RUN yarn run build --production

FROM interactivemap:latest as interactivemap

FROM nginx:1.12.2-alpine
ADD server.conf /etc/nginx/conf.d/default.conf
COPY --from=interactivemap /appstatic /appstatic
COPY --from=node /frontend/build /frontend/build