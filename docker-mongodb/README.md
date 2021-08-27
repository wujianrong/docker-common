# docker-mongodb

#### 介绍
docker mongodb 环境

#### 目录介绍
data mongodb 数据卷挂载目录，做数据持久化


#### 使用说明

1.  docker-compose up -d
2.  初次使用如果遇见数据库没有权限的情况，需要进入容器，手动对admin数据库创建root用户
- docker-compose -it [containerNanme] /bin/bash
- mongo  #进如mongo终端
- use admin;
- db.auth('root','123456a'); #root是数据库用户名，123456a是密码，如果连接不上，则手动创建 db.craeteUser({user:"root", pwd: "123556a", roles:[{role: "root", db: "admin"}]})，创建成功后再次db.auth()
- show dbs;  可以看到数据库了，说明用户验证成功


