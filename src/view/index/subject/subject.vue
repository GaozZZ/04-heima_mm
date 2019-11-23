<template>
  <div>
    <div class="operate">
      <span class="title">学科编号</span>
      <el-input v-model="number" class="number"></el-input>
      <span class="title">学科名称</span>
      <el-input v-model="name" class="name"></el-input>
      <span class="title">创建者</span>
      <el-input v-model="creator" class="creator"></el-input>
      <span class="title">状态</span>
      <el-select v-model="state" class="state" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
      <el-button>清除</el-button>
      <el-button type="primary">
        <i class="el-icon-plus"></i>
        新增学科
      </el-button>
    </div>
    <div class="list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="serial" label="序号"></el-table-column>
        <el-table-column prop="number" label="学科编号"></el-table-column>
        <el-table-column prop="name" label="学科名称"></el-table-column>
        <el-table-column prop="abbreviation" label="简称"></el-table-column>
        <el-table-column prop="creator" label="创建者"></el-table-column>
        <el-table-column prop="date" label="创建日期"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="tool" label="操作">
          <template>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">禁用</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      number: "",
      name: "",
      creator: "",
      state: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          serial: "1",
          number: "QD001",
          name: "前端与移动开发",
          abbreviation: "前端",
          creator: "刘洋洋",
          date: "2019-11-21",
          state: "启用"
        },
        {
          serial: "1",
          number: "QD001",
          name: "Java",
          abbreviation: "后端",
          creator: "北冰洋",
          date: "2019-11-21",
          state: "禁用"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.el-container.is-vertical {
  height: 100%;
}

.el-main > div {
  height: 100%;

  .operate {
    display: flex;
    align-items: center;
    height: 83px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 5px;

    .title {
      font-size: 14px;
      font-weight: bold;
      color: rgb(122, 124, 127);
      margin: 0 12px;

      &:nth-child(1) {
        margin-left: 23px;
      }
    }
    .number {
      width: 100px;
    }
    .name {
      width: 149px;
    }
    .creator {
      width: 100px;
    }
    .state {
      width: 149px;
      margin-right: 11px;
    }
  }

  .list {
    height: calc(100% - 83px);
    background-color: #fff;
    border-radius: 5px;
    padding: 23px;
  }
}
</style>