<template>
  <div class="home">
    <el-button type="primary" @click="JsError">js错误</el-button>
    <el-button type="success">异步错误</el-button>
    <el-button type="danger">promise错误</el-button>
    <el-button type="info">xhr请求报错</el-button>
    <el-button type="warning">fetch请求报错</el-button>
    <el-button type="danger">加载资源报错</el-button>
  </div>
</template>

<script setup>
const JsError = () => {
  arr.push({
    id: 11,
  });
  console.log("kkkkkkk");
};
</script>
<style lang="less"></style>
