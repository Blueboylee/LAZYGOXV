#!/bin/bash

echo "🚀 正在启动后端服务..."
echo "================================"

cd backend

# 检查 Maven 是否安装
if ! command -v mvn &> /dev/null
then
    echo "❌ Maven 未安装，请先安装 Maven"
    echo "下载地址: https://maven.apache.org/download.cgi"
    exit 1
fi

# 检查 Java 版本
echo "📦 检查 Java 版本..."
java -version

echo ""
echo "🔨 正在构建并启动后端..."
mvn spring-boot:run

