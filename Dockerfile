ARG NODEVERSION=latest
FROM node:${NODEVERSION}
EXPOSE 4000
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install -g rimraf
RUN npm install --only=development
RUN apt-get update \
    && apt-get install -y wget gnupg fonts-ipafont-gothic fonts-freefont-ttf firefox-esr --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_PRODUCT=firefox

# Install puppeteer so it's available in the container.
RUN npm install puppeteer
COPY . .
RUN npm run prebuild
RUN npm run build