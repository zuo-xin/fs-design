<template>
  <div class="border">
    <div class="router_view_title">Border 边框</div>
    <p class="router_view_info router_view_info1">
      对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。
    </p>
    <div class="router_view_title_sub">边框</div>
    <div class="router_view_info">
      提供了以下几种边框样式，以供选择。
    </div>
    <div class="router_view_info router_view_info2">
      <span>边框色值为两种，视情况进行选择</span>
      <div class="color_block">
        <div class="color_block_item">
          <span class="color"></span>
          <span class="color_info">#E5E5E5</span>
        </div>
        <div class="color_block_item">
          <span class="color"></span>
          <span class="color_info">#CCCCCC</span>
        </div>
      </div>
    </div>
    <div class="mt0">
      <div class="mt0_item">
        <span>名称</span>
        <span>粗细</span>
        <span>举例</span>
      </div>
      <div class="mt0_item">
        <span>实线</span>
        <span>1px</span>
        <span class="line"></span>
      </div>
      <div class="mt0_item">
        <span>虚线</span>
        <span>1px</span>
        <span class="line"></span>
      </div>
    </div>

    <div class="router_view_title_sub">圆角</div>
    <div class="router_view_info">
      提供了以下几种圆角样式，以供选择。
    </div>

    <div class="mt1 mt1_radius">
      <div class="mt1_box">
        <div class="mt1_title">无圆角</div>
        <div class="mt1_info">产品卡片，Tag场景图，Case场景图</div>
        <div class="mt1_block"></div>
      </div>
      <div class="mt1_box">
        <div class="mt1_title">2px圆角</div>
        <div class="mt1_info">下拉框，分页器，按钮，输入框，文本框</div>
        <div class="mt1_block"></div>
      </div>
    </div>

    <div class="router_view_title_sub">投影</div>
    <div class="router_view_info">
      我们提供了以下几种投影样式，以供选择。
    </div>
    <div class="mt1 mt1_shadow">
      <div class="mt1_box">
        <div class="mt1_title">卡片hover投影<span>（商品列表）</span></div>
        <div class="mt1_info">
          box-shadow: 0 15px 15px -10px rgba(0, 0, 0, .15)
        </div>
        <div class="mt1_block"></div>
      </div>
      <div class="mt1_box">
        <div class="mt1_title">小投影<span>（筛选下拉菜单）</span></div>
        <div class="mt1_info">
          box-shadow: 0px 1px 8px 0 rgba(120,102,102,.3)
        </div>
        <div class="mt1_block"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Border",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.border {
  .router_view_info1 {
    margin-bottom: 60px;
  }
  .router_view_info2 {
    display: flex;
    align-items: center;
    .color_block {
      display: flex;
      margin-left: 18px;
      .color_block_item {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: $fontColor2;
        margin-right: 20px;
        .color {
          display: inline-block;
          width: 18px;
          height: 18px;
          border-radius: 4px;
          margin-right: 8px;
        }
        &:nth-child(1) {
          .color {
            background: #e5e5e5;
          }
        }
        &:nth-child(2) {
          .color {
            background: #ccc;
          }
        }
      }
    }
  }
  .mt0 {
    width: 100%;
    margin: 34px 0 78px 0;
    .mt0_item {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $fontColor2;
      text-align: left;
      margin-bottom: 36px;
      &:nth-child(2) {
        margin-bottom: 43px;
      }
      > span {
        &:nth-child(1) {
          margin-right: 50px;
        }
        &:nth-child(2) {
          margin-right: 50px;
        }
        &.line {
          flex: 1;
          height: 1px;
          background: rgba(229, 229, 229, 1);
        }
      }
    }
  }
  .mt1 {
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    align-items: flex-start;
    color: $fontColor2;
    font-size: 14px;
    .mt1_box {
      margin-right: 44px;
      .mt1_title {
        margin-bottom: 15px;
        > span {
          color: #8d8d8f;
        }
      }
      .mt1_info {
        margin-bottom: 15px;
      }
    }
    &.mt1_radius {
      .mt1_block {
        width: 340px;
        height: 110px;
        border: 1px solid $borderColor1;
        &:nth-child(2) {
          border-radius: 2px;
        }
      }
    }
    &.mt1_shadow {
      .mt1_box {
        .mt1_block {
          width: 340px;
          height: 110px;
          border: 1px solid rgba(247, 247, 247, 1);
          box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.15);
        }
        &:nth-child(2) {
            .mt1_block{
                box-shadow: 0px 1px 8px 0 rgba(120, 102, 102, 0.3);
            }
            
        }
      }
    }
  }
}
</style>
