<template>
  <div>
    <type-nav />
    <list-container />
    <recommend />
    <GoodsRank />
    <ShopLike />
    <ShopFloor />
    <ShopFloor />
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
export default {
  components: {
    ListContainer,
    Recommend,
    GoodsRank,
    ShopLike,
    ShopFloor,
    IconBrand,
  },
};
</script>

<style
TypeNav scoped>
</style>
