# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

# Install Git in the container
RUN apk update && apk add git

# Set the working directory and config
WORKDIR /autodoc
ARG GIT_ACCESS_TOKEN

# Set database env variables
ARG DATABASE_HOST_ARG
ARG DATABASE_USERNAME_ARG
ARG DATABASE_PASSWORD_ARG
ENV DATABASE_HOST=${DATABASE_HOST_ARG}
ENV DATABASE_USERNAME=${DATABASE_USERNAME_ARG}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD_ARG}

# Clone the Git repository
# Note: instantiating CACHEBUST forces clean git clone on the following line
ARG CACHEBUST=1
RUN echo "The value of CACHEBUST is: $CACHEBUST" 
RUN git clone https://${GIT_ACCESS_TOKEN}:@github.com/thencc/NCC_dAPIs.git /repo \
    && rm -rf /repo/.git \
    && rm /repo/workers/ncc-dapis/package.json \
    && mv /repo/workers/ncc-dapis/autodocs-package.json /repo/workers/ncc-dapis/package.json \
    && cp -R /repo/workers/ncc-dapis . 
WORKDIR /autodoc/ncc-dapis

# Install dependencies
RUN echo "//npm.pkg.github.com/:_authToken=${GIT_ACCESS_TOKEN}" > .npmrc \
    && echo "@thencc:registry=https://npm.pkg.github.com/" >> .npmrc \
    && npm install --legacy-peer-deps \
    && rm -f .npmrc
RUN npm i -g @redocly/cli@latest

# COPY . .

# Build documentation 
RUN npm run docker:build-docs
# CMD [ "npm", "run", "docker:build-docs" ]
