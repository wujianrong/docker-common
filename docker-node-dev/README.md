# docker-node-v


#### 介绍
docker node 本地开发环境，统一前端开发环境，避免在window和mac上的差异，将项目直接在容器内运行，外部内访问


#### 目录介绍
etc
- ngxin nginx配置
- ssl https配置
web
- public nginx默认页面
- demo-a 普通html服务配置
- demo-b 单页面（vue、react之类的）项目服务配置



#### 使用说明
构建容器：docker-compose build 
运行： docker-compose up -d
查看日志： docker logs docker-node-dev -f



#### 如何在一个项目内使用

##### 1. 将docker-compose.yml 和 Dockerfile 复制到项目根目录

##### 2. docker-compose.yml 配置暴露端口，在docker-compose 中配置，宿主机和容器内的端口一定要用相同端口，否则会影响项目dev的热更新
```
    ports:
        - "8080:8080"
```
##### 3. 修改项目的热更新地址，因为项目是运行在docker容器内的，但是访问是在宿主机的浏览器上，宿主机的浏览器只能访问容器暴露出来的端口，在vue.config.js内修改
``` js
devServer: {
  client: {
    webSocketURL: 'ws://0.0.0.0:8080/ws',
  }
}
```

##### 4. 构建容器，构建过一次后就不用重复构建，除非改动了Dockerfile
```
docker-compose build 
```

##### 5. 启动容器，启动项目，项目的启动命令可以在docker-compose内的command修改
```
docker-compose up -d
```

##### 6. 查看终端运行情况，因为项目在容器内运行，我们在宿主机上想看终端的运行情况不方便，所以可以通过docker logs去实时查看
```
docker logs docker-node-dev -f
```



