FROM node:6.14.1-slim

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

RUN apt-get update
RUN apt-get install -y firewalld beep
RUN apt-get install -y imagemagick openssl
