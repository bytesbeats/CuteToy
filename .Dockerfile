FROM ubuntu-latest AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY . .
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
ENV NODE_ENV=production
RUN pnpm run build

FROM base AS dokploy
WORKDIR /app
ENV NODE_ENV=production

# Copy only the necessary files
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --form=build /app/.next ./.next
COPY --form=build /app/public ./public

# EXPOSE 3000
# CMD ["pnpm", "start"]