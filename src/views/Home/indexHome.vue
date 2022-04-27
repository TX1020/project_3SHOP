<template>
  <div>
    <type-nav />
    <list-container />
    <recommend />
    <GoodsRank />
    <ShopLike />
    <ShopFloor
      v-for="(item, index) in floorList"
      :key="item.id"
      :list="item"
    ></ShopFloor>
    <IconBrand />
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer/ListContainer.vue";
import Recommend from "@/views/Home/Recommend/TodayRecommend.vue";
import GoodsRank from "@/views/Home/GoodsRank/GoodsRank.vue";
import ShopLike from "@/views/Home/ShopLike/ShopLike.vue";
import ShopFloor from "@/views/Home/ShopFloor/ShopFloor.vue";
import IconBrand from "@/views/Home/IconBrand/IconBrand.vue";
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Recommend,
    GoodsRank,
    ShopLike,
    ShopFloor,
    IconBrand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.getFloorList,
    }),
  },
};
</script>

<style scoped lang='less'>
</style>
