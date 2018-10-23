<template>
  <div class="tophead">
    <div class="th-l" @click="backAction"><i class="icon iconfont icon-back"></i></div>
    <div class="th-title">{{title}}</div>
    <div class="th-r">
      <slot name="r">右侧插槽</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tophead",
  props: ["title", "backurl"],
  data() {
    return {};
  },
  methods: {
    backAction() {
      if (this.backurl) {
        this.$router.push(this.backurl);
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tophead {
  display: flex;
  justify-content: space-between;
  height: $th;
  line-height: $th;
  color: #fff;
  font-size: $text-size-imp;
  background-color: $act-color;
  .th-l {
    padding-left: px2rem(25);
  }
  .th-title {
    text-align: center;
    /* flex: 1 1 auto; */
  }
  .th-r {
    padding-right: px2rem(25);
  }
  .icon::before {
    font-size: $text-size-imp;
  }
}
</style>
