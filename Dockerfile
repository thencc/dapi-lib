# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

# Install Git in the container
RUN apk update && apk add git

# Set the working directory and config
WORKDIR /autodoc
ARG GIT_ACCESS_TOKEN
# RUN git config --global url."https://{GIT_ACCESS_TOKEN}:@github.com/".insteadOf "https://github.com/"

# Set database env variables
ARG DATABASE_HOST_ARG
ARG DATABASE_USERNAME_ARG
ARG DATABASE_PASSWORD_ARG
ENV DATABASE_HOST={DATABASE_HOST_ARG}
ENV DATABASE_USERNAME={DATABASE_USERNAME_ARG}
ENV DATABASE_PASSWORD={DATABASE_PASSWORD_ARG}

# Clone the Git repository
RUN git clone https://${GIT_ACCESS_TOKEN}:@github.com/thencc/NCC_dAPIs.git /repo && \
    rm -rf /repo/.git && \
    cp -R /repo/workers/ncc-dapis/ . && \
    cp /repo/workers/ncc-dapis/autodocs-package.json ./package.json
# RUN git clone https://github.com/thencc/NCC_dAPIs.git /repo
# COPY --from=0 /repo/workers/ncc-dapis/ .
# COPY /repo/workers/ncc-dapis/autodocs-package.json ./package.json
# COPY ./workers/ncc-dapis/autodocs-package.json ./package.json

# Install dependencies
RUN npm install --legacy-peer-deps
RUN npm i -g @redocly/cli@latest

# COPY . .

# Build documentation on start
CMD [ "npm", "run", "build-docs" ]
