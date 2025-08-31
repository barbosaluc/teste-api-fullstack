FROM node:20.19.0-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --no-audit --no-fund
COPY . .
RUN npm run build -- --configuration production

FROM node:20.19.0-alpine
WORKDIR /app

# Instalar angular-http-server (específico para Angular)
RUN npm install -g angular-http-server

COPY --from=build /app/dist/teste-api-frontend/browser /app/dist

EXPOSE 4200

# angular-http-server é melhor para SPAs Angular
CMD ["angular-http-server", "--path", "dist", "--port", "4200", "--enablePushState"]