package com.lazygoxv.controller;

import com.lazygoxv.model.ApiResponse;
import com.lazygoxv.model.TestingRecord;
import com.lazygoxv.service.TestingService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/testing")
public class TestingController {

    private final TestingService testingService;

    public TestingController(TestingService testingService) {
        this.testingService = testingService;
    }

    /**
     * POST /api/testing/list
     * 无请求体，直接返回 Testing 表所有数据
     */
    @PostMapping("/list")
    public ApiResponse<List<TestingRecord>> listAll() {
        return ApiResponse.success(testingService.findAll());
    }
}


