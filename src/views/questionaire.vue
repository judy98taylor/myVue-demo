<template lang="pug">
  .p-questionaire
    h1 第二届现代汽车Hyundai Blue Prize
    p 第二届Hyundai Blue Prize中国青年策展人奖于2018年3月23日在北京现代汽车文化中心正式开启。Hyundai Blue Prize提名评委代表、资深策展人和独立撰稿人孙冬冬，独立策展人和艺评人鲍栋，策展人戴卓群，策展人付晓东，以及现代汽车（中国）投资有限公司李赫埈常务、现代汽车全球艺术总监李大衡部长出席发布会。
    img(src='http://t10.baidu.com/it/u=2491847634,180858475&fm=173&app=25&f=JPEG?w=600&h=400&s=5805C5184CB0589C7D0CA4C2030060BF')
    ol.questionaire
      li(v-for="(v) in questionaire") 
        .q {{v.id+1}}.{{v.q}}
        .o(v-if='!!v.o') 
          div(v-for="vv in v.o" @click="select(vv,v)") 
            span(v-show="v.a===vv.i") 已选
            span(v-show="v.a!==vv.i") 未选
            | {{vv.v}}
        .i(v-if='!v.o')
          textarea(type="text") 

        
    nav 
      mt-button(@click.native="submit()") 提交
      

</template>
<style lang="stylus" scoped>
.p-questionaire {
}

.questionaire {
  font-size: 0.32rem;
  line-height: 2;

  li {
    margin-bottom: 0.2rem;
  }

  span {
    margin-right: 1rem;
  }

  textarea {
    border: 1px solid red;
    width: 100%;
    height: 2rem;
    font-size: 0.32rem;
  }
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
  name: "questionaire",
  components: {},
  data() {
    return {
      questionaire: [
        {
          id: 0,
          q: "你对这次活动满意吗？",
          a: "",
          o: [
            {
              i: 0,
              v: "0分"
            },
            {
              i: 1,
              v: "1分"
            },
            {
              i: 2,
              v: "2分"
            },
            {
              i: 3,
              v: "3分"
            }
          ]
        },
        {
          id: 1,
          q: "你对这次活动满意吗？",
          a: "",
          o: [
            {
              i: 0,
              v: "0分"
            },
            {
              i: 1,
              v: "1分"
            },
            {
              i: 2,
              v: "2分"
            },
            {
              i: 3,
              v: "3分"
            }
          ]
        },
        {
          id: 2,
          q: "有什么建议或者意见吗？",
          a: ""
        }
      ]
    };
  },
  methods: {
    select(vv, v) {
      v.a = vv.i;
    },
    submit() {
      this.$toast("提交成功！");
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
