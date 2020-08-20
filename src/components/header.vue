<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="6" :offset="19">
        <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-header{
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
</style>