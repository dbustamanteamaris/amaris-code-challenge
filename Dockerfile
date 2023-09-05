FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN chmod +x wait-for-it.sh
RUN npx tsc
EXPOSE 3000
RUN apk add --no-cache netcat-openbsd
CMD ["./wait-for-it.sh", "db:5432", "--", "npm", "start"]