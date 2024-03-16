FROM imbios/bun-node:canary-18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

# I use Asia/Jakarta as my timezone, you can change it to your timezone
RUN apt-get -y update && \
    apt-get install -yq openssl git ca-certificates tzdata && \
    ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
# RUN npm install --legacy-peer-deps
RUN bun install
ENV PATH="./node_modules/.bin:$PATH"

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .

RUN bun run build


# Production image, copy all the files and run next
# FROM node:18-slim AS runner
# WORKDIR /app



# ARG CONFIG_FILE
# COPY $CONFIG_FILE /app/.env.local
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1
# RUN next --version 

# COPY --from=builder  /app/.next/ ./

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["bun", "run", "start"]