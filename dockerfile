FROM node:8
RUN mkdir -p /app
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV API_URL='http://localhost:8000'

RUN npm run prod

EXPOSE 3000

CMD ["npm", "start"]