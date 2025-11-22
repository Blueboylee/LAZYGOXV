#!/bin/bash

echo "🎨 正在启动前端服务..."
echo "================================"

cd frontend

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null
then
    echo "❌ Node.js 未安装，请先安装 Node.js"
    echo "下载地址: https://nodejs.org/"
    exit 1
fi

# 显示 Node.js 版本
echo "📦 Node.js 版本:"
node -v

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📥 首次运行，正在安装依赖..."
    npm install
fi

echo ""
echo "🔨 正在启动前端开发服务器..."
npm run dev

