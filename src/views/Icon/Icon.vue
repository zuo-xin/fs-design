<template>
  <div class="icon">
    <div class="router_view_title">Icon 图标</div>
    <p class="router_view_info router_view_info1">
      图标是 UI
      设计中必不可少的组成。通常我们理解图标设计的含义，是将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度。
    </p>
    <div class="router_view_title_sub">设计原则</div>
    <div class="mt1">
      <div class="mt1_item">
        <span class="num">01</span>
        <span class="info">准确</span>
      </div>
      <div class="mt1_item">
        <span class="num">02</span>
        <span class="info">简单</span>
      </div>
      <div class="mt1_item">
        <span class="num">03</span>
        <span class="info">节奏</span>
      </div>
      <div class="mt1_item">
        <span class="num">04</span>
        <span class="info">愉悦</span>
      </div>
    </div>
    <p class="router_view_info router_view_info2">
      <span class="black">准确：</span
      >设计造型准确的图标（保持偶数原则，去小数点）；选择表意准确的图标，不对用户的认知造成困扰。<br />
      <span class="black">简单：</span
      >在表意清晰准确的基础上，尽量保持图形的简洁，不做多余的修饰。<br />
      <span class="black"> 节奏 ：</span>挖掘构图中的秩序之美。<br />
      <span class="black"> 愉悦 ：</span>赋予适度的情感。<br />
    </p>
    <div class="router_view_title_sub">轮廓线与模版</div>
    <p class="router_view_info">FS.COM的系统图标都是按照 1024 x 1024 的画板进行制作的：<br />统一的设计框架像是无形的共识，可以让彼此间的理解得到进一步的提升。设计师可以快速的调用并在此基础上做变形。</p>
    <img src="./images/img1.jpg" class="mt2" alt="">
    <div class="router_view_title_sub">图标的一致性</div>
    <p class="router_view_info">为保证一致性能渗透到细节，我们对线宽、圆角、角度和层次制定了规则。</p>
    <img src="./images/img2.jpg" class="mt3" alt="">
    <div class="router_view_title_sub">分类图标</div>
    <div class="mt4">
      <div class="mt4_item">
        <div class="icon_box">
          <img src="" alt="">
        </div>
        <p class="info">25G/100G<br>Transceivers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon {
  .router_view_info {
    .black {
      color: $fontColor1;
    }
  }
  .router_view_info1 {
    margin-bottom: 54px;
  }
  .router_view_info2 {
    margin-bottom: 56px;
  }
  .mt1 {
    display: flex;
    align-items: center;
    padding-left: 60px;
    margin: 20px 0 52px 0;
    .mt1_item {
      display: inline-block;
      width: 155px;
      height: 155px;
      border-radius: 155px;
      position: relative;
      margin-right: 80px;
      background: #fff;
      box-shadow: 10px 10px 28px 0 #f2f5f7;
      .num {
        font-size: 80px;
        color: #f7f7f7;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      .info {
        font-size: 20px;
        color: $fontColor2;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
  .mt2{
    margin: 36px 0 64px 244px;
  }
  .mt3{
    margin: 35px 0 58px 50px;
  }
}
</style>
