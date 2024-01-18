FROM node:lts-alpine as build

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build

FROM nginx:alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx","-g","daemon off;"]