<template>
  <div id="app">
    <Header></Header>
    <!-- 在home search上显示footer，在登录、注册上隐藏 通过路由元信息定义一个meta-->
        <router-view/>
    <Footer v-show="$route.meta.show"></Footer>

  </div>
</template>

<script>
import Header from '@/components/Header/IndexHeader.vue'
import Footer from '@/components/Footer/IndexFooter.vue'
export default {
  name: 'IndexHeader',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="less">
</style>
