# docker-nginx


#### 介绍
docker nginx 环境


#### 目录介绍
etc
- ngxin nginx配置
- ssl https配置
web
- public nginx默认页面
- demo-a 普通html服务配置
- demo-b 单页面（vue、react之类的）项目服务配置



#### 使用说明
运行：docker-compose up -d   
进入容器：docker exec -it docker-nginx /bin/sh


#### 如何添加一个新项目
比如增加一个商城项目，项目名称叫"mall"
- 在etc/nginx目录下增加一个nginx配置文件，那么对应增加一个mall.conf，里面配置的内容可以参考demo-a.conf和demo-b.conf
- 把对应的代码放到web目录下，那么代码目录就是web/mall，记得要去mall.conf中修改root路径
- 增加完配置和代码后，去docker-compose.yml里面增加暴露端口，在ports下添加
- 上面三步做完，就可以重启了

#### tips
1. web和etc目录是通过数据卷挂载到容器内的，所以直接改动了宿主机外面的内容，就会直接同步到容器内
2. 如果我们的代码有改动，直接在宿主机上改，就可以直接同步到docker容器内了，不需要重启容器
3. 如果修改了nginx配置呢，需要进入容器内重启nginx，或者直接重启整个容器



