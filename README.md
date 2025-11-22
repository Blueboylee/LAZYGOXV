# 🚀 LAZYGOXV Monorepo

一个现代化的全栈项目，采用 Monorepo 架构，包含 Spring Boot 后端和 React 前端。

[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)

## 📋 目录

- [项目简介](#项目简介)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [开发指南](#开发指南)
- [API 文档](#api-文档)
- [构建部署](#构建部署)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 📖 项目简介

LAZYGOXV 是一个采用 Monorepo 架构的全栈项目，旨在提供一个可扩展、易维护的现代化 Web 应用开发框架。

### 特性

- ✅ **Monorepo 架构** - 前后端统一管理，代码共享便捷
- ✅ **现代化技术栈** - Spring Boot 3.x + React 18 + TypeScript
- ✅ **开发体验优化** - 热重载、自动编译、类型检查
- ✅ **统一 API 响应** - 标准化的数据格式
- ✅ **CORS 配置** - 前后端分离开发支持
- ✅ **开箱即用** - 完整的项目结构和启动脚本

## 🛠️ 技术栈

### 后端

- **Java 17** - 编程语言
- **Spring Boot 3.2.0** - 应用框架
- **Spring Web** - Web 开发支持
- **Spring DevTools** - 开发工具（热重载）
- **Maven** - 依赖管理和构建工具

### 前端

- **React 18** - UI 框架
- **TypeScript 5.2** - 类型安全的 JavaScript
- **Vite 5.0** - 快速的前端构建工具
- **Axios** - HTTP 客户端
- **ESLint** - 代码质量检查

## 📁 项目结构

```
LAZYGOXV/
├── backend/                          # Spring Boot 后端
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/lazygoxv/
│   │   │   │       ├── Application.java          # 应用主入口
│   │   │   │       ├── config/                   # 配置类
│   │   │   │       │   └── CorsConfig.java       # CORS 跨域配置
│   │   │   │       ├── controller/               # REST 控制器层
│   │   │   │       │   └── HealthController.java # 健康检查控制器
│   │   │   │       └── model/                    # 数据模型层
│   │   │   │           └── ApiResponse.java      # 统一 API 响应格式
│   │   │   └── resources/
│   │   │       └── application.yml              # 应用配置文件
│   │   └── test/                                  # 测试代码
│   └── pom.xml                                    # Maven 依赖配置
│
├── frontend/                         # React 前端
│   ├── src/
│   │   ├── services/                 # API 服务层
│   │   │   └── api.ts                # API 请求封装
│   │   ├── App.tsx                   # 主应用组件
│   │   ├── App.css                   # 应用样式
│   │   ├── main.tsx                  # 应用入口
│   │   └── index.css                 # 全局样式
│   ├── index.html                    # HTML 模板
│   ├── package.json                  # npm 依赖配置
│   ├── tsconfig.json                 # TypeScript 配置
│   ├── tsconfig.node.json            # Node.js TypeScript 配置
│   └── vite.config.ts                # Vite 构建配置
│
├── start-all.sh                      # 一键启动脚本（前后端）
├── start-backend.sh                  # 后端启动脚本
├── start-frontend.sh                 # 前端启动脚本
├── QUICKSTART.md                     # 快速启动指南
├── README.md                         # 项目说明文档
└── .gitignore                        # Git 忽略文件配置
```

## 🚀 快速开始

### 前置要求

在开始之前，请确保你的系统已安装以下工具：

- **Java 17+** - [下载地址](https://adoptium.net/)
- **Node.js 16+** - [下载地址](https://nodejs.org/)
- **Maven 3.6+** - [下载地址](https://maven.apache.org/download.cgi)

验证安装：

```bash
java -version
node -v
mvn -version
```

### 方式一：一键启动（推荐）

使用启动脚本同时启动前后端：

```bash
# 给脚本添加执行权限（首次运行）
chmod +x start-all.sh

# 启动所有服务
./start-all.sh
```

按 `Ctrl + C` 停止所有服务。

### 方式二：分别启动

#### 1. 启动后端

```bash
# 方式 A: 使用启动脚本
chmod +x start-backend.sh
./start-backend.sh

# 方式 B: 手动启动
cd backend
mvn spring-boot:run
```

> 🔐 **数据库凭证**：在 `backend/.env.local` 中设置 `SPRING_DATASOURCE_PASSWORD=vtRl1PUImpGH7ttt`（或运行前在终端中 `export SPRING_DATASOURCE_PASSWORD=vtRl1PUImpGH7ttt`）。该文件已在 `.gitignore` 中忽略，请勿提交到版本库。

后端将在 `http://localhost:8080` 启动。

#### 2. 启动前端

打开**新的终端窗口**：

```bash
# 方式 A: 使用启动脚本
chmod +x start-frontend.sh
./start-frontend.sh

# 方式 B: 手动启动
cd frontend
npm install  # 首次运行需要安装依赖
npm run dev
```

前端将在 `http://localhost:5173` 启动。

### 验证安装

1. **访问前端**: 打开浏览器访问 http://localhost:5173
2. **测试后端 API**: 
   - 健康检查: http://localhost:8080/api/health
   - 问候消息: http://localhost:8080/api/hello
3. **使用 Postman**: 导入 API 端点进行测试（详见 [API 文档](#api-文档)）

## 💻 开发指南

### 后端开发

#### 项目架构

后端采用经典的三层架构：

- **Controller 层** (`controller/`) - 处理 HTTP 请求，调用 Service 层
- **Service 层** (`service/`) - 业务逻辑处理（待扩展）
- **Model 层** (`model/`) - 数据模型和 DTO

#### 添加新的 API 端点

1. 在 `controller/` 目录下创建新的控制器：

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public ApiResponse<List<User>> getAllUsers() {
        // 实现逻辑
        return ApiResponse.success(users);
    }
}
```

2. 在 `model/` 目录下创建对应的数据模型

3. 重启后端服务（或等待 Spring DevTools 自动重载）

#### 配置修改

修改 `backend/src/main/resources/application.yml` 来调整配置：

```yaml
server:
  port: 8080  # 修改端口

spring:
  application:
    name: lazygoxv-backend
```

### 前端开发

#### 项目结构

- **components/** - React 组件（待扩展）
- **services/** - API 服务封装
- **App.tsx** - 主应用组件

#### 添加新组件

1. 在 `src/components/` 目录下创建新组件：

```typescript
// src/components/UserCard.tsx
import React from 'react';

export const UserCard: React.FC = () => {
  return <div>User Card</div>;
};
```

2. 在 `App.tsx` 中引入并使用

#### API 调用

使用封装好的 API 服务：

```typescript
import { fetchHealth } from './services/api';

// 在组件中使用
const data = await fetchHealth();
```

#### 样式开发

- 全局样式: `src/index.css`
- 组件样式: `src/App.css` 或使用 CSS Modules

## 📡 API 文档

### 基础信息

- **Base URL**: `http://localhost:8080/api`
- **响应格式**: JSON
- **统一响应结构**:

```json
{
  "code": 200,
  "message": "success",
  "data": {},
  "timestamp": 1234567890
}
```

### API 端点

#### 1. 健康检查

**GET** `/api/health`

检查后端服务健康状态。

**请求示例**:
```bash
curl http://localhost:8080/api/health
```

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "status": "UP",
    "service": "lazygoxv-backend",
    "timestamp": "2025-11-22T18:39:26.178791"
  },
  "timestamp": 1763807966178
}
```

**Postman 测试**:
- 方法: `GET`
- URL: `http://localhost:8080/api/health`
- Headers: 无需特殊设置

#### 2. 问候消息

**GET** `/api/hello`

获取问候消息。

**请求示例**:
```bash
curl http://localhost:8080/api/hello
```

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": "Hello from LAZYGOXV Backend! 🚀",
  "timestamp": 1763807966178
}
```

#### 3. Testing 表数据

**POST** `/api/testing/list`

无请求体，直接返回 PostgreSQL 中 `Testing` 表的全部记录（字段：`id`, `created_at`）。

**请求示例**:
```bash
curl -X POST http://localhost:8080/api/testing/list
```

**响应示例**:
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "createdAt": "2025-11-22T15:33:12.345678+10:00"
    }
  ],
  "timestamp": 1763807966178
}
```

## 🏗️ 构建部署

### 构建后端

```bash
cd backend
mvn clean package
```

构建产物位于 `backend/target/lazygoxv-backend-0.0.1-SNAPSHOT.jar`

运行 JAR 文件：

```bash
java -jar target/lazygoxv-backend-0.0.1-SNAPSHOT.jar
```

### 构建前端

```bash
cd frontend
npm run build
```

构建产物位于 `frontend/dist/` 目录。

预览构建结果：

```bash
npm run preview
```

### 生产环境部署

1. **后端**: 将 JAR 文件部署到服务器，使用 `java -jar` 运行
2. **前端**: 将 `dist/` 目录部署到 Nginx 或静态文件服务器
3. **配置**: 修改前端 API 基础 URL 指向生产环境后端地址

## ❓ 常见问题

### 1. 端口被占用

**问题**: 8080 或 5173 端口已被占用

**解决方案**:

- **后端端口**: 修改 `backend/src/main/resources/application.yml` 中的 `server.port`
- **前端端口**: 修改 `frontend/vite.config.ts` 中的 `server.port`

### 2. Maven 依赖下载慢

**解决方案**: 配置 Maven 使用国内镜像

编辑 `~/.m2/settings.xml`:

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

**解决方案**: 使用淘宝镜像

```bash
npm config set registry https://registry.npmmirror.com
```

### 4. 前端无法连接后端

**检查清单**:
- ✅ 后端服务是否已启动
- ✅ 后端端口是否正确（默认 8080）
- ✅ 浏览器控制台是否有错误信息
- ✅ CORS 配置是否正确

### 5. 如何停止服务

- **Mac/Linux**: 按 `Ctrl + C`
- **Windows**: 按 `Ctrl + C`

或使用命令：

```bash
# 停止后端
lsof -ti:8080 | xargs kill -9

# 停止前端
lsof -ti:5173 | xargs kill -9
```


### 代码规范

- **后端**: 遵循 Java 编码规范，使用 4 空格缩进
- **前端**: 遵循 ESLint 规则，使用 2 空格缩进
- **提交信息**: 使用清晰的提交信息，遵循 [Conventional Commits](https://www.conventionalcommits.org/)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。


