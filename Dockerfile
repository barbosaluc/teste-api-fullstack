# Stage 1: Build do Backend (Spring Boot)
FROM maven:3.9.9-eclipse-temurin-17 AS backend-build
WORKDIR /backend
COPY Teste-api-backend/pom.xml .
COPY Teste-api-backend/src ./src
RUN mvn clean package -DskipTests

# Stage 2: Build do Frontend (Angular)
FROM node:20.19.0-alpine AS frontend-build
WORKDIR /frontend
COPY teste-api-frontend/package*.json .
COPY teste-api-frontend/package-lock.json .
RUN npm ci --legacy-peer-deps --no-audit --no-fund
COPY teste-api-frontend/ .
RUN npm run build -- --configuration production

# Stage 3: Runtime Final
FROM node:20.19.0-alpine
WORKDIR /app

# Instalar Java para Spring Boot
RUN apk add --no-cache openjdk17-jre

# Instalar angular-http-server (específico para Angular)
RUN npm install -g angular-http-server

# Copiar Backend (JAR)
COPY --from=backend-build /backend/target/*.jar app.jar

# Copiar Frontend (dist)
COPY --from=frontend-build /frontend/dist/teste-api-frontend/browser ./frontend-dist

EXPOSE 8080 4200

# Comando para iniciar AMBAS aplicações
CMD sh -c "java -jar app.jar & angular-http-server --path ./frontend-dist --port 4200 --enablePushState"