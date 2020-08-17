<template>
  <nav class="sidebar_wrap">
    <div class="sidebar_box">
    <div class="sidebar_list" v-for="item in side_data" :key="item.title">
      <div class="block_title">{{ item.title }}</div>
      <div class="block_box" v-if="item.sub.length">
        <router-link class="nav_btn" :to="{name:sub.name}" v-for="sub in item.sub" :key="sub.title">{{ sub.title }}</router-link>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
import side_data from "./side_data.js";
export default {
  name: "SideBar",
  data() {
    return {
      side_data,
     
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods:{
 onScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop>=130) {
        this.sidebar_fixed = true;
      } else {
        this.sidebar_fixed = false;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.sidebar_wrap {
  min-height: 100%;
  flex:0 0 260px;
  padding-top:40px;
  
  background: #fff;
 .sidebar_box{
   height: 100%;
   border-right: 1px solid #f1f1f1;
 }
  .sidebar_list {
    .block_title {
      font-weight: bold;
      color: $fontColor1;
      font-size: 14px;
      padding-left: 40px;
      margin-bottom: 15px;
    }
    .block_box {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      .nav_btn {
        height: 44px;
        line-height: 44px;
        color: $fontColor2;
        padding-left: 40px;
        &.router-link-exact-active {
          color: $fontColor3;
          border-left: 5px solid $borderColor2;
          background: rgba(255, 245, 245, 1);
          padding-left: 35px;
        }
        &:hover {
          color: $fontColor3;
          border-left: 5px solid $borderColor2;
          background: rgba(255, 245, 245, 1);
          padding-left: 35px;
        }
      }
    }
  }
}
</style>
