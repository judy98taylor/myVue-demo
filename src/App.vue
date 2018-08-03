<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/toupiao">投票</router-link> |
      <router-link to="/choujiang">抽奖</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app {
  max-width: 750px;
  margin: 0 auto;
  display: block;
}

#nav {
  font-size: 0.48rem;
  margin: 0.2rem auto;
  text-align: center;
}
</style>
