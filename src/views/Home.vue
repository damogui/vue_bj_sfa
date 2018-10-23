<template>
  <div class="home">
    <tophead title="SFA"><router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link></tophead>
    <H1>我是bj sfa项目</H1>
    <div id="pie" ref="pie_wrap"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

import HeadTop from "../components/TopHead";
export default {
  name: "home",
  components: {
    tophead: HeadTop
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(this.$refs.pie_wrap);
    // 绘制图表
    myChart.setOption({
      color: ["rgb(102,208,113)", "rgb(223, 223, 223)"],
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["95%", "100%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: "center",
              textStyle: {
                fontSize: "48",
                fontWeight: "bold"
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 30, name: "" }, { value: 70, name: "" }]
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped>
#pie {
  width: px2rem(500);
  height: px2rem(400);
}
</style>
