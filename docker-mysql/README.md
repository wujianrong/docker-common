# docker-mysql

#### 介绍
docker mysql 环境
具体配置看docker-compose.yml、env文件   
主要做了
- 配置了root用户
- 配置了dev用户
- 暴露了3306端口出去到宿主机的33060端口
- 挂载了mysql数据目录（db目录），用于做数据持久化

#### 目录介绍
data mysql 数据卷挂载目录，做数据持久化


#### 使用说明

1.  docker-compose up -d


