<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vote">投票</router-link> |
      <router-link to="/lottery">抽奖</router-link> |
      <router-link to="/questionaire">问卷</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  max-width: 750px;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  padding: 0.4rem;
  font-size: 0.24rem;
}

#nav {
  font-size: 0.48rem;
  margin: 0.2rem auto;
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      name: "home"
    };
  },
  mounted() {}
};
</script>