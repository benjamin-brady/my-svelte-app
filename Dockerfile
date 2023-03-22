# Stage 1 - Build
FROM node:18-alpine AS build-env
COPY . /app
WORKDIR /app

RUN npm ci
RUN npm run build

# Stage 2 - Server
FROM gcr.io/distroless/nodejs:18
ENV NODE_OPTIONS=--max_old_space_size=512
WORKDIR /app
COPY --from=build-env /app/package*.json .
COPY --from=build-env /app/build ./build
EXPOSE 3000
CMD ["./build/index.js" ]