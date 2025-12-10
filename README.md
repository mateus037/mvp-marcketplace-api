# MVP Marketplace API

Core business logic service with persistence.

## Tech Stack
- Node.js
- Express
- TypeScript
- Prisma (ORM)
- PostgreSQL

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `SECONDARY_API_URL`: URL of the MVP Marketplace Services

### Setup
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update values as needed.

## Running
```bash
# Start DB (Ensure Postgres is running)
npx prisma migrate dev --name init

# Run dev
npm run dev
```

## Docker
```bash
docker build -t mvp-marcketplace-api .
docker run -p 3001:3001 --env-file .env mvp-marcketplace-api
```
