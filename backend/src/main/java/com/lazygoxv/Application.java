package com.lazygoxv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * LAZYGOXV 后端应用主入口
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println("\n========================================");
        System.out.println("🚀 后端服务启动成功！");
        System.out.println("📍 访问地址: http://localhost:8080");
        System.out.println("📍 健康检查: http://localhost:8080/api/health");
        System.out.println("========================================\n");
    }
}

