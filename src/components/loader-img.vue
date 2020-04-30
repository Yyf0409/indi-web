<template >
    <div class="loading"  alt=""></div>
</template>
<script>
    export default {
        name:'loading' //定义的组件名称 使用时写法：loading
    }
</script>
<style scoped>
    .loading{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: url('~assets/images/loader.gif');
    }
</style>