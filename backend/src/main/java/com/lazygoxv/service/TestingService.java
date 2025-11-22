package com.lazygoxv.service;

import com.lazygoxv.model.TestingRecord;
import com.lazygoxv.repository.TestingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestingService {

    private final TestingRepository testingRepository;

    public TestingService(TestingRepository testingRepository) {
        this.testingRepository = testingRepository;
    }

    public List<TestingRecord> findAll() {
        return testingRepository.findAll();
    }
}


