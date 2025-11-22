package com.lazygoxv.repository;

import com.lazygoxv.model.TestingRecord;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.OffsetDateTime;
import java.util.List;

@Repository
public class TestingRepository {

    private final JdbcTemplate jdbcTemplate;

    public TestingRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<TestingRecord> findAll() {
        String sql = "SELECT id, created_at FROM \"Testing\" ORDER BY id";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new TestingRecord(
                rs.getLong("id"),
                rs.getObject("created_at", OffsetDateTime.class)
        ));
    }
}


