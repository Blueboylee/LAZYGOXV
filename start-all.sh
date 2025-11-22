#!/bin/bash

echo "🚀 LAZYGOXV 全栈项目启动脚本"
echo "========================================"
echo ""

# 检查操作系统
OS="$(uname -s)"
echo "操作系统: $OS"
echo ""

# 函数：启动后端
start_backend() {
    echo "📦 正在启动后端服务..."
    cd backend
    mvn spring-boot:run &
    BACKEND_PID=$!
    cd ..
    echo "后端进程 PID: $BACKEND_PID"
}

# 函数：启动前端
start_frontend() {
    echo "🎨 正在启动前端服务..."
    cd frontend
    
    # 检查并安装依赖
    if [ ! -d "node_modules" ]; then
        echo "📥 安装前端依赖..."
        npm install
    fi
    
    npm run dev &
    FRONTEND_PID=$!
    cd ..
    echo "前端进程 PID: $FRONTEND_PID"
}

# 启动后端
start_backend

# 等待几秒让后端启动
echo ""
echo "⏳ 等待后端启动..."
sleep 5

# 启动前端
echo ""
start_frontend

echo ""
echo "========================================"
echo "✅ 启动完成！"
echo ""
echo "📍 后端地址: http://localhost:8080"
echo "📍 前端地址: http://localhost:5173"
echo ""
echo "按 Ctrl+C 停止所有服务"
echo "========================================"

# 等待用户中断
trap "echo ''; echo '正在停止服务...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit 0" INT

# 保持脚本运行
wait

