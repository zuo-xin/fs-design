<template>
  <div id="app">
    <Head />
    <div
      class="main_ctn"
      :class="{ main_ctn_fixed: sidebar_fixed }"
      ref="main_ctn"
    >
      <side-bar></side-bar>
      <div class="router_ctn">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head/Head.vue";
import SideBar from "./components/SideBar/SideBar.vue";
export default {
  name: "App",
  components: {
    Head,
    SideBar,
  },
  data() {
    return {
      sidebar_fixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 130) {
        this.sidebar_fixed = true;
      } else {
        this.sidebar_fixed = false;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;

  .main_ctn {
    width: 100%;
    max-width: 1420px;
    margin: 0 auto;
    background: #fff;
    padding: 0 0 60px 0;
    display: flex;
    align-items: stretch;
    .router_ctn {
      flex: 1 1 auto;
      padding: 40px 100px 0 50px;
    }
    &.main_ctn_fixed {
      .sidebar_wrap {
        width: 260px;
        position: fixed;
        top: 0;
        bottom: 0;
      }
      .router_ctn {
        padding-left: 311px;
      }
    }
  }
}
</style>
