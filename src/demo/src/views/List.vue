<template>
  <div class="home">
    <md-field>
      <md-field-item
        name="item2"
        v-intersection
        :data-log="
          JSON.stringify({
            module: 'module-a',
            productId: item
          })
        "
        :title="'浦发简约白金卡' + item"
        v-for="item in list"
        :key="item"
        arrow="arrow-right"
        solid
        align="right"
      >
        <img
          class="item-img"
          src="https://pic.u51.com/sfs-gateway/api/v1/download/6fb29955359d410cbe9cf3832cecf8e20552"
          slot="left"
        />
      </md-field-item>
    </md-field>
    <md-button @click="addList">加载更多</md-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "list",
  data() {
    return {
      list: []
    };
  },
  components: {},
  methods: {
    addList() {
      let { count } = this.$route.query;
      count = count || 10;
      console.log(count, "count");

      for (let i = 0; i < count; i++) {
        console.log(this.list.length);
        this.list.push(this.list.length);
      }
    }
  },
  created() {},
  mounted() {
    this.addList();
  }
};
</script>
<style>
.item-img {
  width: 200px;
  height: 150px;
}
</style>
