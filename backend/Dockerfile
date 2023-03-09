FROM node:12.18.3


LABEL description="what's good backend"
LABEL maintainer = ["kat.contreras@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]