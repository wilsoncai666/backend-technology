FROM node:14-alpine

# 在容器中创建一个目录
# RUN mkdir -p /usr/src/app/
# 定位到容器的工作目录,类似于mkdir+cd命令
WORKDIR /usr/src/app
# RUN/COPY是分层的，package.json 提前，只要没修改就不会重新安装包
# COPY package.json .
#RUN cd /usr/src/app/
COPY . .
RUN yarn install
# COPY . /usr/src/app/
EXPOSE 8081
CMD ["node", "index.js"]

