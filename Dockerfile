# Build do Backend
FROM maven:3.9.9-eclipse-temurin-17 AS backend-build
WORKDIR /backend
COPY Teste-api-backend/pom.xml .
COPY Teste-api-backend/src ./src
RUN mvn clean package -DskipTests

# Build do Frontend - USANDO NODE 20
FROM node:20-alpine AS frontend-build
WORKDIR /frontend
COPY teste-api-frontend/package*.json ./
RUN npm install
COPY teste-api-frontend/ .
RUN npm run build -- --configuration production

# Runtime Final - USANDO NODE 20
FROM node:20-alpine
WORKDIR /app

# Instalar Java
RUN apk add --no-cache openjdk17-jre

# Copiar Backend
COPY --from=backend-build /backend/target/*.jar app.jar

# Copiar Frontend
COPY --from=frontend-build /frontend/dist/teste-api-frontend ./frontend-dist

# Instalar http-server
RUN npm install -g http-server

# Copiar script de inicialização
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 4200 8080

CMD ["/start.sh"]