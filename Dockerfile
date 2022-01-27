FROM node:16-alpine3.14 as init

RUN mkdir /home/node/app
WORKDIR /home/node/app

FROM init as local
COPY package.json .
EXPOSE 3000
RUN yarn
RUN yarn dev


FROM init as prod
COPY . .
EXPOSE 3000
RUN yarn
RUN yarn generate
CMD ["yarn", "start"]

