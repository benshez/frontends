# build environment
FROM node:lts-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm config set unsafe-perm true

RUN npm install --silent

RUN npm install @vue/cli@5.0.8 -g

COPY . .

RUN npm run build

#production environment

FROM nginx:stable-alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build ./app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




# # base image
# FROM node:12.2.0-alpine
# # set working directory

# WORKDIR /app

# # add /app/node_modules/.bin to $PATH

# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies

# COPY package.json /app/package.json

# RUN npm config set unsafe-perm true

# RUN npm install

# RUN npm install @vue/cli@3.7.0 -g

# # start app

# CMD ["npm", "run", "serve"]