package com.lazygoxv.model;

import java.time.OffsetDateTime;

/**
 * 对应 PostgreSQL 中的 Testing 表
 */
public class TestingRecord {

    private final Long id;
    private final OffsetDateTime createdAt;

    public TestingRecord(Long id, OffsetDateTime createdAt) {
        this.id = id;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}


