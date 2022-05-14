

### 为什么折腾这玩意？

在我们开发过程中需要安装很多环境，有些环境安装起来甚是麻烦，好不容易安装好了，有时候需要换电脑或者是给小伙伴也装一个环境的时候，重复性工作就很多了，又或者压根就不想在自己电脑上安装一大堆可能并不常用的环境，那么用docker无疑是最好的选择，***一键运行***


### 用处？

首先要声明，这并不是多么完善的环境，只是一些基础性的环境，为了方便靓仔们简单的一些日常应用，如果需要拓展可以自己完善一下，或者是有啥常见的基础环境和进阶补充也可以联系我，我给靓仔们补上


### 使用说明

#### 1. 下载基础项目 docker-common
起哄的靓仔们：说好的一键运行？？？  
那是不是至少得克隆下项目，不然对着空气？想屁吃   
厚脸皮求个星星

[github仓库](https://github.com/wujianrong/docker-common)   

[gitee仓库](https://gitee.com/wujr1532/docker-common)



#### 2. 以运行nginx为例

- 进入docker-nginx目录，直接运行 `docker-compose up -d` , 好了，一键运行完毕

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7bc836daea0420da2752d294df29522~tplv-k3u1fbpfcp-watermark.image)
大胆访问一下 localhost:8000，访问成功！  
为什么是localhost:8000？因为我喜欢8000，就配置8000，你不喜欢就快去改配置文件

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fd2ff9c61d44be18a226f004b37b2c6~tplv-k3u1fbpfcp-watermark.image)


来介绍下docker-nginx的目录   

etc
- ngxin nginx配置
- ssl https配置
web
- public nginx默认页面
- demo-a 普通html服务配置
- demo-b 单页面（vue、react之类的）项目服务配置

docker-compose.yml  docker-compose配置，用于配置端口和数据挂载等

虽然里面的配置都很简单，但是我决定还是简单介绍一下添加项目

##### 如何添加一个新项目

比如增加一个商城项目，项目名称叫"mall"
- 在etc/nginx目录下增加一个nginx配置文件，那么对应增加一个mall.conf，里面配置的内容可以参考demo-a.conf和demo-b.conf

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/330c0dc51a274b68b00adf55401602a5~tplv-k3u1fbpfcp-watermark.image)
- 把对应的代码放到web目录下，那么代码目录就是web/mall，记得要去mall.conf中修改root路径和一个唯一的端口号，端口号冲突nginx会启动失败

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bec344dd157246139cc5f256a2b46a03~tplv-k3u1fbpfcp-watermark.image)
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef00e259302f496ba92742e1ddf29c82~tplv-k3u1fbpfcp-watermark.image)
- 增加完配置和代码后，去docker-compose.yml里面增加暴露端口，在ports下添加

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/120546c60a8f47b4a951a2167219f146~tplv-k3u1fbpfcp-watermark.image)
- 上面三步做完，就可以重启了
```
docker-compose up -d
```
访问localhost:8011，啥都没有的商城跑起来了

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7d173484f8345c1973affdec17778dd~tplv-k3u1fbpfcp-watermark.image)


##### tips
1. web和etc目录是通过数据卷挂载到容器内的，所以直接改动了宿主机外面的内容，就会直接同步到容器内
2. 如果我们的代码有改动，直接在宿主机上改，就可以直接同步到docker容器内了，不需要重启容器
3. 如果修改了nginx配置呢，需要进入容器内重启nginx，或者直接重启整个容器


#### 3. 偷懒
因为偷懒，文章只对nginx的使用进行介绍，其他环境的使用在目录下有对用的README.md文件介绍，有疑问的可以找我哟

