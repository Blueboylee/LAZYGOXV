package com.lazygoxv.controller;

import com.lazygoxv.model.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * 健康检查和基础 API 控制器
 */
@RestController
@RequestMapping("/api")
public class HealthController {

    /**
     * 健康检查接口
     */
    @GetMapping("/health")
    public ApiResponse<Map<String, Object>> health() {
        Map<String, Object> data = new HashMap<>();
        data.put("status", "UP");
        data.put("service", "lazygoxv-backend");
        data.put("timestamp", LocalDateTime.now());
        
        return ApiResponse.success(data);
    }

    /**
     * 测试接口
     */
    @GetMapping("/hello")
    public ApiResponse<String> hello() {
        return ApiResponse.success("Hello from LAZYGOXV Backend! 🚀");
    }
}

