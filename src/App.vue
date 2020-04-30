<template>
  <div id="app" class="home">
    <transition name="fade">
      <loading v-if="isLoading" class=""></loading>
    </transition>
  </div>
</template>

<script>
import loading from 'components/loader-img.vue'
export default {
  name: 'App',
  components: {
    loading
  },
  data(){
    return{
      isLoading:true
    }
  },
  mounted() {
    const me = this
    // 初始化页面数据
    me.loadPageData()
  },
  methods:{
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      this.isLoading=false;
    },
  }
}
</script>

<style scoped>
  .home{
    background-image:url("assets/images/home.jpg");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
</style>
