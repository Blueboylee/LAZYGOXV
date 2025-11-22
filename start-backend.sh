#!/bin/bash

echo "🚀 正在启动后端服务..."
echo "================================"

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$ROOT_DIR/backend/.env.local"

if [ -f "$ENV_FILE" ]; then
    echo "🔐 加载环境变量: backend/.env.local"
    set -o allexport
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    set +o allexport
fi

cd "$ROOT_DIR/backend"

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

