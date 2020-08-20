<template>
  <div id="app" class="home">
    <el-container>
      <Appheader/>
      <el-main>
        <AppIndex/>
      </el-main>
      <AppFoot/>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AppHeader from 'components/header'
import AppIndex from 'components/index'
import AppFoot from 'components/footer'
import * as axios from "axios";
Vue.use(ElementUI);
export default {
  name: 'App',
  components: {
    Appheader: AppHeader,
    AppIndex:AppIndex,
    AppFoot:AppFoot
  },
  data() {
    return {
      message: 'Hello Vue!',
      fit: ['scale-down'],
      url: require("assets/images/cat1.jpg")
    }
  },
  mounted() {
    const me = this
    // 初始化页面数据
    me.loadPageData()
  },
  methods: {
    loadPageData: function () {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      axios.get('http://localhost:9010/spider/test')
          .then(response => (this.info = response))
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
    },
  }
}
</script>

<style>
.cat{
  height: 500px;
  width: 500px;
  background-size: 500px 500px;
  background: url("/src/assets/images/cat1.jpg") no-repeat;
  display: inline-block;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100%;
}

</style>
