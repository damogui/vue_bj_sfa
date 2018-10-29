<template>
  <div class="home">
    <tophead title="SFA"><router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link></tophead>
    <div class="main-bd">
      <div class="date-wrap">{{getYearMonth}}</div>
      <div class="mp-wrap">
        <mp title="当前月进度" :val="getDayOfMonth" :percent="true"></mp>
        <mp title="月销售完成度" :val="mounthSealsPercent" :percent="true"></mp>
        <mp title="有效商店数" :val="shops" :percent="false"></mp>
      </div>
    </div>
    <div id="pie" ref="pie_wrap"></div>
  </div>
</template>

<script>
import HeadTop from "../components/TopHead";
import progress from "../components/Progress";
import service from "../service";

export default {
  name: "home",
  components: {
    tophead: HeadTop,
    mp: progress
  },
  data() {
    return {
      mounthSealsPercent: 0,
      shops: 0
    };
  },
  created() {
    // axios.get('/api/getUserProgress')
    service.getUserProgress().then(res => {
      this.mounthSealsPercent = parseInt(res.data.monthPercent * 100);
      this.shops = res.data.totalShops;
    });
  },
  computed: {
    getYearMonth() {
      let t = new Date();
      return `${t.getFullYear()}年${t.getMonth() + 1} 月`;
    },
    getDayOfMonth() {
      let t = new Date();
      return parseInt((t.getDate() / 30) * 100);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.main-bd {
  background-color: #fff;
  .date-wrap {
    padding: px2rem(40) 0 px2rem(22);
    color: #000;
    font-size: $text-size-mid;
    text-align: center;
  }
  .mp-wrap {
    display: flex;
    justify-content: space-around;
  }
}
#pie {
  width: px2rem(500);
  height: px2rem(400);
}
</style>
