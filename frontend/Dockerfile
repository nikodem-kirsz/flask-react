FROM node:14

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE ${FRONTEND_PORT}

CMD ["npm", "start"]