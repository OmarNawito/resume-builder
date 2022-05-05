ARG NODEVERSION=latest
FROM node:${NODEVERSION}
EXPOSE 4000
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install -g rimraf
RUN npm install --only=development
COPY . .
RUN npm run prebuild
RUN npm run build