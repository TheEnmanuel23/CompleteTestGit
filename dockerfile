FROM node:8
RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn && $HOME/.yarn/bin/yarn --pure-lockfile

RUN ls -al -R
RUN yarn install --ignore-engines

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "server.js"]