package com.lazygoxv;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;
import java.sql.Connection;

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

    /**
     * 启动后简单验证数据库连接
     */
    @Bean
    public CommandLineRunner dataSourceVerifier(DataSource dataSource) {
        return args -> {
            try (Connection connection = dataSource.getConnection()) {
                boolean valid = connection.isValid(2);
                System.out.println(valid
                        ? "🔗 PostgreSQL 数据库连接成功"
                        : "⚠️ PostgreSQL 数据库连接无法验证");
            } catch (Exception ex) {
                System.err.println("⚠️ PostgreSQL 数据库连接失败: " + ex.getMessage());
            }
        };
    }
}

