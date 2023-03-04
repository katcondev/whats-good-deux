FROM node:12.18.3

LABEL description="what's good frontend"
LABEL maintainer = ["kat.contreras@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]