ARG NODE_VERSION=20.10.0
ARG PNPM_VERSION=8.10.5

# Install
FROM node:${NODE_VERSION}-alpine as installer
WORKDIR /app
RUN npm install -g pnpm@${PNPM_VERSION}

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Build
FROM installer as builder

WORKDIR /app
COPY . ./
COPY --from=installer /app/node_modules ./node_modules
ARG ENVIRONMENT
RUN pnpm nuxt:build

# Run
FROM node:${NODE_VERSION}-alpine
RUN npm install -g pm2

WORKDIR /app
COPY --from=builder /app/ecosystem.config.js ./
COPY --from=builder /app/.output ./.output

CMD ["pm2-runtime", "ecosystem.config.js", "--only", "pereverzev_prod" ]
