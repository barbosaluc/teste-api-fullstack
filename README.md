Execute com Docker Compose
bash
# Construir e executar os containers
docker-compose up --build -d

# Ou para ver logs em tempo real
docker-compose up --build
3. Acesse as Aplicações
Frontend (Angular): http://localhost:4200

Backend (Spring Boot): http://localhost:8080

Swagger API Docs: http://localhost:8080/swagger-ui/index.html

H2 Database Console: http://localhost:8080/h2-console

4. Comandos Úteis
bash
# Ver status dos containers
docker-compose ps

# Ver logs do frontend
docker-compose logs frontend

# Ver logs do backend
docker-compose logs backend

# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v
🛠️ Desenvolvimento Local
Frontend (Angular)
bash
cd teste-api-frontend

# Instalar dependências
npm install

# Servidor de desenvolvimento
ng serve

# Acesse: http://localhost:4200
Backend (Spring Boot)
bash
cd Teste-api-backend

# Executar aplicação
./mvnw spring-boot:run

# Acesse: http://localhost:8080
📦 Estrutura do Projeto
text
teste-api-fullstack/
├── Teste-api-backend/          # Spring Boot API
│   ├── src/
│   └── pom.xml
├── teste-api-frontend/         # Angular App
│   ├── src/
│   └── package.json
├── docker-compose.yml          # Orquestração Docker
├── Dockerfile.backend          # Docker Backend
├── Dockerfile.frontend         # Docker Frontend
└── README.md                   # Este arquivo
🔧 Configurações Técnicas