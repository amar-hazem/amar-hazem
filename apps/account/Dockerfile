ARG NODE_PORT
ARG NODE_VERSION
ARG TURBOREPO_VERSION

FROM node:${NODE_VERSION} AS base
 
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN pnpm global add turbo@${TURBOREPO_VERSION}
COPY . .
RUN turbo prune account --docker
 
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN yarn install
COPY --from=builder /app/out/full/ .
RUN yarn turbo run build
 
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/.next/static ./apps/account/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/public ./apps/account/public
CMD node apps/account/server.js