<template lang="pug">
  .p-lottery
    h1 第二届现代汽车Hyundai Blue Prize
    p 第二届Hyundai Blue Prize中国青年策展人奖于2018年3月23日在北京现代汽车文化中心正式开启。Hyundai Blue Prize提名评委代表、资深策展人和独立撰稿人孙冬冬，独立策展人和艺评人鲍栋，策展人戴卓群，策展人付晓东，以及现代汽车（中国）投资有限公司李赫埈常务、现代汽车全球艺术总监李大衡部长出席发布会。
    img(src='http://t10.baidu.com/it/u=2491847634,180858475&fm=173&app=25&f=JPEG?w=600&h=400&s=5805C5184CB0589C7D0CA4C2030060BF')
    nav 
      mt-button(@click.native="draw()") 点我抽奖
      

</template>
<style lang="stylus" scoped>
.p-lottery {
}

img {
  width: 100%;
  display: block;
  margin: 0.2rem auto;
}

h1 {
  font-size: 0.36rem;
  line-height: 2;
  text-align: center;
}

p {
  font-size: 0.24rem;
  line-height: 1.5;
}

nav {
  display: flex;
  justify-content: space-between;
  justify-content: space-around;
}
</style>

<script>
export default {
  name: "lottery",
  components: {},
  methods: {
    draw() {
      this.$toast("恭喜你中奖了!");
    },
    goto(name) {
      // 对象
      this.$router.push({ path: name });

      // // 命名的路由
      // this.$router.push({ name: "user", params: { userId: 123 } });

      // // 带查询参数，变成 /register?plan=private
      // this.$router.push({ path: "register", query: { plan: "private" } });
    }
  }
};
</script>
