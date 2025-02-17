# Development Stage
FROM node:22-alpine AS development

WORKDIR /app

# Enable Corepack and prepare PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

EXPOSE 3000
CMD ["pnpm", "dev", "--host"]

# Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only dependencies first (for better caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the project
RUN pnpm run build

# Production Stage
FROM node:22-alpine AS production

WORKDIR /app

# Install `serve` to serve the static files
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm add  serve

# Copy built files from the builder stage
COPY --from=builder /app/dist .

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
