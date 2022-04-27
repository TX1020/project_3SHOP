<template>
  <div id="app">
    <Header></Header>
    <!-- 在home search上显示footer，在登录、注册上隐藏 通过路由元信息定义一个meta-->
    <router-view />
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/IndexHeader.vue";
import Footer from "@/components/Footer/IndexFooter.vue";
export default {
  name: "IndexHeader",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储于仓库中 放在根组件中就只会执行一次，给action派发一次商品的三级列表
    this.$store.dispatch("categoryList");
  },
};
</script>

<style lang="less">
</style>
