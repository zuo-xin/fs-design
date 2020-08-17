<template>
  <div class="header">
    <!-- <div class="head_wrap"> -->
      <div class="head">
        <div class="head_left">
        <a href="./">
        <img src="./images/logo.jpg" class="logo" alt="logo" />
        </a>
          
          <span class="left_title">FS.COM 前台组件设计规范</span>
        </div>
        <div class="head_right">
          <span class="info1">网络设计部</span>
          <span class="info2">
            <span class="line"></span>
            <span class="text"> Network Design</span>
            <span class="line"></span>
          </span>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Head",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 80px;
  width: 100%;
  background: #fff;
  margin-bottom: 50px;
//   .head_wrap {
//     width: 100%;
//     position: fixed;
//     top: 0;
//     height: 80px;
//     background: #fff;
//     box-shadow: 0px 10px 40px 0px rgba(72, 109, 156, 0.14);
//   }
  .head {
    width: 100%;
    max-width: 1420px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $fontColor1;
    background: #fff;
    .head_left {
      display: flex;
      align-items: center;
      .logo {
        cursor: pointer;
        display: inline-block;
        width: 75px;
        margin-right: 20px;
      }
      .left_title {
        font-size: 20px;
        padding-left: 20px;
        height: 24px;
        line-height: 24px;
        border-left: 1px solid $borderColor1;
      }
    }
    .head_right {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-right: 10px;
      .info1 {
        letter-spacing: 5px;
        margin-right: 20px;
      }
      .info2 {
        display: flex;
        align-items: center;
        .line {
          display: inline-flex;
          width: 1px;
          height: 13px;
          background: $fontColor1;
          transform: rotate(32deg);
        }
        .text {
          display: inline-block;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
