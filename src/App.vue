<template>
<div>
  <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>


  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:'app',
  data() {
    return {
      value:true
    }
  },
};
</script>

<style>
</style>