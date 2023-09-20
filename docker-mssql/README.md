# docker-mssql

#### 介绍
docker mssql(sql server) 环境
具体配置看docker-compose.yml、env文件   

#### 目录介绍
data mssql 数据卷挂载目录，做数据持久化


#### 使用说明

1.  docker-compose up -d

#### DBeaver(可视化工具)连接docker容器内的sql server

tips：  账号默认sa，密码.env文件里面配置的密码

当你启动了 SQL Server 容器并想使用 DBeaver 连接到这个数据库时，你可以按照以下步骤操作：

1. 确保已经安装并启动了 DBeaver。你可以从官方网站（https://dbeaver.io/）下载和安装 DBeaver。

2. 打开 DBeaver，并点击主界面左上角的 "新建数据库连接" 图标（绿色加号）。

3. 在 "新建连接" 对话框中，选择适当的数据库驱动程序。对于 SQL Server，你可以选择 "Microsoft SQL Server" 驱动程序。

4. 在 "基本设置"选项卡中，填写以下信息：
   - 主机：填写本地主机 IP 地址（例如：127.0.0.1）或 Docker 容器的 IP 地址（可以使用 `docker inspect sql-server` 命令获取）。
   - 端口：填写对应的映射端口（默认是 1433）。
   - 数据库：你可以使用默认的系统数据库（如 master、tempdb）或者创建新的数据库。

5. 在 "身份验证"选项卡中，选择适当的身份验证方式，对于刚刚启动的 SQL Server 容器，可以选择 "SQL Server 身份验证"。然后填写用户名和密码（默认的用户名是 "sa"）。

6. 点击 "测试连接" 按钮，确保能够成功连接到 SQL Server 数据库。如果一切正常，你将收到连接成功的提示。

7. 点击 "完成" 按钮，保存连接设置。

现在，你应该能够使用 DBeaver 连接到你在 SQL Server 容器中启动的数据库。你可以执行查询、浏览数据库对象，并进行其他数据库管理操作。

请注意，根据你的网络设置以及 Docker 和数据库的配置，连接信息可能会有所不同。确保正确填写了与你的环境相匹配的连接细节。此外，如果你使用非本地主机连接或者 Docker 容器的 IP 地址可能会发生变化，所以需要灵活调整连接设置。


