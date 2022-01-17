package com.inspur.dwmanage.dao;

import com.inspur.dwmanage.bean.DwmNeTree;

public interface DwmNeTreeMapper {
    int insert(DwmNeTree record);

    int insertSelective(DwmNeTree record);
}