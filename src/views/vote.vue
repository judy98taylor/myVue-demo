<template lang="pug">
  .p-vote
    h1 第二届现代汽车Hyundai Blue Prize
    p 第二届Hyundai Blue Prize中国青年策展人奖于2018年3月23日在北京现代汽车文化中心正式开启。Hyundai Blue Prize提名评委代表、资深策展人和独立撰稿人孙冬冬，独立策展人和艺评人鲍栋，策展人戴卓群，策展人付晓东，以及现代汽车（中国）投资有限公司李赫埈常务、现代汽车全球艺术总监李大衡部长出席发布会。
    img(src='https://motorstudio.hyundai.com.cn/beijing/@Cms_448c3978-2f37-44a9-b9a0-678db5e292f6.jpg')
    
    ul.vote 
      p 目前剩余可投票数 {{count}}
      li(v-for="(item,index) in list")
        img(:src="item.src")
        .r(v-show="count==0")   
          p 当前票数 {{item.count}}
          p 当前排名 {{item.ranking}}
        .r(v-show="count>0" @click="vote(item)") 
          p 给我投票
  

      
      

</template>
<style lang="stylus" scoped>
.p-vote {
  &>img {
    width: 100%;
    display: block;
    margin: 0.2rem auto;
  }
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

li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;

  img {
    width: 2.1rem;
    height: 2.64rem;
  }

  .r {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "vote",
  components: {},
  data() {
    return {
      count: 2,
      list: []
    };
  },
  mounted() {
    // const self = this;
    let list = [
      {
        id: 0,
        name: "a",
        src: require("../assets/q1.jpg"),
        ranking: 0,
        count: 0
      },
      {
        id: 1,
        name: "a11",
        src: require("../assets/q2.jpg"),
        ranking: 0,
        count: 0
      },
      {
        id: 2,
        name: "a11",
        src: require("../assets/q3.jpg"),
        ranking: 0,
        count: 0
      },
      {
        id: 3,
        name: "a11",
        src: require("../assets/q4.jpg"),
        ranking: 0,
        count: 0
      }
    ];
    this.list = list;
    // this.count = localStorage.getItem("count") || 2;
    // this.list = JSON.parse(localStorage.getItem("list")) || list;
    // console.log(this.count, this.list, localStorage.getItem("count"));
  },
  methods: {
    vote(item) {
      const self = this;
      setTimeout(() => {
        item.count++;
        self.count--;
        this.$toast("投票成功");
        let list = JSON.parse(JSON.stringify(self.list));
        // conut排序
        list.sort((a, b) => {
          return a.count < b.count;
        });
        // 赋值ranking
        list.forEach((v, i) => {
          v.ranking = i + 1;
        });
        // 处理并列情况
        list.forEach((v, i, a) => {
          if (i > 0 && v.count == a[i - 1].count) {
            v.ranking = a[i - 1].ranking;
          }
        });
        console.log(list);
        // 赋值
        list.forEach(v => {
          // self.list[v.id].ranking = i + 1; // 不处理并列情况
          self.list[v.id].ranking = v.ranking;
        });
        if (self.count == 0) {
          localStorage.setItem("count", 0);
          localStorage.setItem("list", JSON.stringify(self.list));
        }
      }, 500);
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
