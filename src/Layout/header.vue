<template>
  <div class="header">
    <div class="all">
      <span class="icon" @click="fn">
        <i :class="icons"></i>
      </span>
    </div>
    <div class="list"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //定义缩进 icon
      icons: "el-icon-d-arrow-left",
      iconse: true,
    };
  },
  created() {
    this.$bus.$on("changing", () => {
      if (this.iconse) {
        this.icons = "el-icon-d-arrow-right";
      } else {
        this.icons = "el-icon-d-arrow-left";
      }
    });
  },
  methods: {
    fn() {
      this.$bus.$emit("indentation");
      this.iconse = !this.iconse;
      if (this.iconse) {
        this.icons == "";
      }
    },
    fnicon() {},
  },
};
</script>
<style>
.cont .el-header {
  height: 84px !important;
}
.all {
  height: 50px;
  line-height: 50px;
  font-size: 27px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.list {
  height: 30px;
}

.icon {
  display: block;
  width: 50px;
  text-align: center;
  cursor: pointer;
  transition: all 300ms;
}
.icon:hover {
  background-color: rgb(0, 0, 0, 0.05);
}
</style>