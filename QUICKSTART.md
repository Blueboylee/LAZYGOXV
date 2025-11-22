# 🚀 快速启动指南

## 前置要求

在开始之前，请确保你的系统已安装以下工具：

### 必需工具

1. **Java 17+**
   ```bash
   # 检查 Java 版本
   java -version
   ```
   如未安装，请访问: https://adoptium.net/

2. **Maven 3.6+**
   ```bash
   # 检查 Maven 版本
   mvn -version
   ```
   如未安装，请访问: https://maven.apache.org/download.cgi

3. **Node.js 16+**
   ```bash
   # 检查 Node.js 版本
   node -v
   ```
   如未安装，请访问: https://nodejs.org/

## 启动方式

### 方式一：一键启动（推荐）

使用启动脚本同时启动前后端：

```bash
# 给脚本添加执行权限
chmod +x start-all.sh

# 启动
./start-all.sh
```

按 `Ctrl+C` 停止所有服务。

### 方式二：分别启动

#### 1. 启动后端

在项目根目录下：

```bash
chmod +x start-backend.sh
./start-backend.sh
```

或者手动启动：

```bash
cd backend
mvn spring-boot:run
```

后端将在 `http://localhost:8080` 启动。

#### 2. 启动前端

打开新的终端，在项目根目录下：

```bash
chmod +x start-frontend.sh
./start-frontend.sh
```

或者手动启动：

```bash
cd frontend
npm install  # 首次运行需要安装依赖
npm run dev
```

前端将在 `http://localhost:5173` 启动。

## 验证安装

### 测试后端

访问以下 URL：

- 健康检查: http://localhost:8080/api/health
- 测试接口: http://localhost:8080/api/hello

### 测试前端

访问: http://localhost:5173

你应该看到一个漂亮的界面，显示后端健康状态和一个测试按钮。

## 常见问题

### 1. 端口被占用

**后端端口 8080 被占用：**

修改 `backend/src/main/resources/application.yml`:

```yaml
server:
  port: 8081  # 改为其他端口
```

**前端端口 5173 被占用：**

修改 `frontend/vite.config.ts`:

```typescript
server: {
  port: 3000,  // 改为其他端口
}
```

### 2. Maven 依赖下载慢

配置 Maven 使用阿里云镜像，编辑 `~/.m2/settings.xml`:

```xml
<mirrors>
  <mirror>
    <id>aliyun</id>
    <mirrorOf>central</mirrorOf>
    <url>https://maven.aliyun.com/repository/public</url>
  </mirror>
</mirrors>
```

### 3. npm 依赖安装慢

使用淘宝镜像：

```bash
npm config set registry https://registry.npmmirror.com
```

### 4. 前端无法连接后端

1. 确保后端已启动
2. 检查 CORS 配置
3. 查看浏览器控制台错误信息

## 项目结构

```
LAZYGOXV/
├── backend/                    # Spring Boot 后端
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/lazygoxv/
│   │       │       ├── Application.java      # 主入口
│   │       │       ├── config/               # 配置类
│   │       │       ├── controller/           # 控制器
│   │       │       └── model/                # 数据模型
│   │       └── resources/
│   │           └── application.yml           # 应用配置
│   └── pom.xml                              # Maven 配置
│
├── frontend/                   # React 前端
│   ├── src/
│   │   ├── services/          # API 服务
│   │   ├── App.tsx            # 主组件
│   │   ├── App.css            # 样式
│   │   └── main.tsx           # 入口文件
│   ├── package.json           # npm 配置
│   └── vite.config.ts         # Vite 配置
│
├── start-all.sh               # 一键启动脚本
├── start-backend.sh           # 后端启动脚本
├── start-frontend.sh          # 前端启动脚本
└── README.md                  # 项目说明
```

## 下一步

现在你已经成功启动项目了！🎉

你可以开始：

1. **添加新的 API 端点**
   - 在 `backend/src/main/java/com/lazygoxv/controller/` 创建新的控制器

2. **开发前端页面**
   - 在 `frontend/src/` 目录下添加新组件

3. **连接数据库**
   - 在 `backend/pom.xml` 添加数据库依赖
   - 配置 `application.yml` 数据库连接

4. **添加用户认证**
   - 集成 Spring Security
   - 实现 JWT 认证

祝你开发愉快！ 🚀

