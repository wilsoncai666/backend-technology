package com.slife.report.dao;

import com.slife.report.entity.PrivRunRedBatch;

public interface PrivRunRedBatchMapper {
    int deleteByPrimaryKey(String batchId);

    int insert(PrivRunRedBatch record);

    int insertSelective(PrivRunRedBatch record);

    PrivRunRedBatch selectByPrimaryKey(String batchId);

    int updateByPrimaryKeySelective(PrivRunRedBatch record);

    int updateByPrimaryKey(PrivRunRedBatch record);
}