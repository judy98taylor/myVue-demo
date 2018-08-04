<template lang="pug">
  .g-index
    .header
      h1 这是投票页面
      .btn 投票按钮

</template>
<style lang="stylus" scoped>
.g-index {
  // background-color: red;
  text-align: center;
}

h1 {
  font-size: 0.36rem;
  line-height: 1.5;
}

.btn {
  display: inline-block;
  padding: 0.2rem;
  border: 1px solid #000;
  font-size: 0.4rem;
}
</style>

<script>
export default {
  name: "home",
  components: {}
};
</script>
