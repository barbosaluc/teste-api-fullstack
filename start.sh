#!/bin/sh

# Iniciar Spring Boot em background
echo "🚀 Iniciando Spring Boot na porta 8080..."
java -jar /app/app.jar &

# Aguardar o Spring Boot iniciar
echo "⏳ Aguardando Spring Boot..."
sleep 15

# Iniciar Angular
echo "🌐 Iniciando Angular na porta 4200..."
cd /app/frontend-dist && http-server -p 4200 -a 0.0.0.0 --proxy http://localhost:8080?