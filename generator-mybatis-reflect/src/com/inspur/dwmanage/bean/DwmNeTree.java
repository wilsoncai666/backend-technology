package com.inspur.dwmanage.bean;

import java.math.BigDecimal;
import java.util.Date;

public class DwmNeTree {
    private Long intId;

    private Long parentNode;

    private String zhLabel;

    private Long nodeOrder;

    private String noderSql;

    private String remark;

    private BigDecimal stateflag;

    private Date timeStamp;

    private String modifier;

    private Date modifyTime;

    private String creator;

    private Date creatTime;

    private String noderTable;

    public Long getIntId() {
        return intId;
    }

    public void setIntId(Long intId) {
        this.intId = intId;
    }

    public Long getParentNode() {
        return parentNode;
    }

    public void setParentNode(Long parentNode) {
        this.parentNode = parentNode;
    }

    public String getZhLabel() {
        return zhLabel;
    }

    public void setZhLabel(String zhLabel) {
        this.zhLabel = zhLabel == null ? null : zhLabel.trim();
    }

    public Long getNodeOrder() {
        return nodeOrder;
    }

    public void setNodeOrder(Long nodeOrder) {
        this.nodeOrder = nodeOrder;
    }

    public String getNoderSql() {
        return noderSql;
    }

    public void setNoderSql(String noderSql) {
        this.noderSql = noderSql == null ? null : noderSql.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public BigDecimal getStateflag() {
        return stateflag;
    }

    public void setStateflag(BigDecimal stateflag) {
        this.stateflag = stateflag;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier == null ? null : modifier.trim();
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public Date getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Date creatTime) {
        this.creatTime = creatTime;
    }

    public String getNoderTable() {
        return noderTable;
    }

    public void setNoderTable(String noderTable) {
        this.noderTable = noderTable == null ? null : noderTable.trim();
    }
}