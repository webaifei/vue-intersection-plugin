<template>
  <div class="home">
    <img
      v-intersection
      ref="img"
      :data-log="
        JSON.stringify({
          module: 'test-a',
          productId: '001'
        })
      "
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {},
  mounted() {
    const data = this.$refs["img"].dataset.log;

    console.log(typeof data);
    console.log(JSON.parse(data));
  }
};
</script>
