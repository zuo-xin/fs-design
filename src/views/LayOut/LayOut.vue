<template>
  <div class="layout">
    <div class="router_view_title">Layout 布局</div>
    <p class="router_view_info router_view_info1">
      空间布局是体系化视觉设计的起点，和传统的平面设计的不同之处在于，UI界面的布局空间要基于「动态、体系化」的角度出发展开。基于「秩序之美」的原则，我们探索UI 设计中的动态空间秩序，形成这种界面布局方式。
    </p>
    <div class="router_view_title_sub">总览</div>
    <div class="router_view_info">
      页面内容区域有1440、1200两种宽度。1440宽主要用于产品详情页；1200宽用于文章、专题页等，使内容更为集中，易于阅读。
    </div>
    <div class="mt0">
      <div class="mt0_line_box mt0_line_box_top">
        <span class="vertical_line"></span>
        <div class="mt0_line_content">
          <span class="horizontal_line"></span>
          <span class="top_info">总宽度1920px</span>
          <span class="horizontal_line"></span>
        </div>
        <span class="vertical_line"></span>
      </div>
      <div class="mt0_ctn">
        <div class="mt0_ctn_box">
          <div class="mt0_ctn_child">
            <div class="mt0_line_box mt0_ctn_child_line_box">
              <span class="vertical_line"></span>
              <div class="mt0_line_content">
                <span class="horizontal_line"></span>
                <span class="top_info">内容宽度1200px</span>
                <span class="horizontal_line"></span>
              </div>
              <span class="vertical_line"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt0_line_box mt0_line_box_bottom">
        <span class="vertical_line"></span>
        <div class="mt0_line_content">
          <span class="horizontal_line"></span>
          <span class="top_info">总宽度1920px</span>
          <span class="horizontal_line"></span>
        </div>
        <span class="vertical_line"></span>
      </div>
    </div>

    <div class="router_view_title_sub">栅格</div>
    <div class="router_view_info router_view_info2">
      栅格系统在页面排布布局、尺寸设定方面给了设计团队直观的参考，它让页面设计变得更有规律，从而减少了设计决策成本；UI设计也是需要理性的、客观的、具有数学逻辑美感的，栅格系统能让设计更有秩序和节奏感，页面信息的展现更加清晰，提高阅读效率，从而提供给用户舒适的使用体验。<br /><br />在我们的网页规范中的栅格PC采用 12列，平板采用 8 列，M端采用 4 列。
    </div>

    <img src="./images/img1.jpg" class="mt1" alt="" />

    <div class="router_view_title_sub">列和槽</div>
    <div class="router_view_info">
      列（Columns）是内容的容器，槽（Gutters）用来调节相邻两个列的间距，把控页面留白,边距是内容宽度之外的留白部分，外边距一般有个安全距离。
    </div>
    <img src="./images/img2.jpg" class="mt2" alt="" />

    <div class="router_view_title_sub">常用模度</div>
    <div class="router_view_info">
      网页中有大量的不同类型和量级的页面，为了帮助使团队内不同的设计者们在网页布局上保持一致性和韵律感，统一设计到开发的布局语言，减少还原损耗，我们使用了UI模度的概念。在大量的实践中，我们提取了一组可以用于网页布局空间决策的数组，他们都保持了4 倍数的原则、具备动态的韵律感。<br />经过验证，可以在一定程度上帮助我们更快更好的实现布局空间上的设计决策。
    </div>
    <div class="mt4">
      <div class="mt4_item">
        <span>4</span>
        <span>12</span>
        <span>24</span>
        <span>40</span>
        <span>72</span>
        <span>104</span>
        <span>228</span>
        <span>288</span>
        <span>384</span>
        <span>584</span>
        <span>896</span>
        <span>1188</span>
      </div>
      <div class="mt4_item">
        <span>4</span>
        <span>20</span>
        <span>24</span>
        <span>40</span>
        <span>64</span>
        <span>104</span>
        <span>268</span>
        <span>340</span>
        <span>460</span>
        <span>700</span>
        <span>940</span>
        <span>1420</span>
      </div>
    </div>

    <div class="mt5">
        <img src="./images/img3.jpg"  alt="">
        <img src="./images/img4.jpg"  alt="">
    </div>
    <div class="router_view_title_sub">模块间距</div>
    <div class="router_view_info">
      两个不同板块之间的上下间距为50px。页面宽度为1200px时同一板块内的内容上下左右间距为12px（注：页面宽度为1440px时同一板块内的内容上下左右间距为20px）。
    </div>
    <div class="mt6">
        <div class="mt6_box mt6_box1">
            <div class="item">100%</div>
        </div>
        <div class="mt6_box mt6_box3">
            <div class="item">33%</div>
            <div class="item">33%</div>
            <div class="item">33%</div>

        </div>
        <div class="mt6_box mt6_box4">
            <div class="item">25%</div>
            <div class="item">25%</div>
            <div class="item">25%</div>
            <div class="item">25%</div>

        </div>
        <div class="mt6_box mt6_box5">
            <div class="item">20%</div>
            <div class="item">20%</div>
            <div class="item">20%</div>
            <div class="item">20%</div>
            <div class="item">20%</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayOut",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.layout {
  .router_view_info1 {
    margin-bottom: 30px;
  }
  .mt0 {
    width: 1000px;
    margin: 32px auto 60px auto;
    .mt0_line_box {
      display: flex;
      align-items: flex-start;
      .vertical_line {
        display: inline-block;
        width: 1px;
        height: 10px;
        background: $bgColor2;
      }
      .mt0_line_content {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        margin-top: -7px;
        .horizontal_line {
          flex: 1 1 auto;
          height: 1px;
          background: $bgColor2;
        }
        .top_info {
          font-size: 14px;
          color: $fontColor3;
          padding: 0 16px;
        }
      }
    }
    .mt0_line_box_top {
      margin-bottom: 10px;
    }
    .mt0_ctn {
      width: 1000px;
      height: 220px;
      background: rgba(255, 245, 245, 1);

      .mt0_ctn_box {
        margin: 0 auto;
        width: 760px;
        height: 220px;
        background: rgba(255, 230, 230, 1);
        .mt0_ctn_child {
          margin: 0 auto;
          width: 600px;
          height: 220px;
          background: rgba(252, 212, 212, 1);
          display: flex;
          align-items: center;
          .mt0_ctn_child_line_box {
            align-items: center;
            margin-top: 0;
            width: 100%;
            .vertical_line {
              margin-top: -7px;
            }
          }
        }
      }
    }
    .mt0_line_box_bottom {
      width: 760px;
      margin: 10px auto 0 auto;
      .mt0_line_content {
        margin-top: 2px;
      }
    }
  }
  .mt1{
      display: block;
      margin: 30px auto 54px 102px;

  }
  .mt2 {
    display: block;
    margin: 18px auto 58px auto;
  }
  .mt3 {
    margin: 20px auto 58px auto;
  }
  .mt4 {
    width: 100%;
    margin: 35px auto 45px auto;
    box-shadow: 0px 5px 15px 0px rgba(34, 34, 34, 0.15);
    .mt4_item {
      display: flex;
      padding: 30px 20px 28px 20px;
      > span {
        flex: 1 1 auto;
        text-align: center;
        font-size: 16px;
        color: $fontColor2;
        font-weight: 500;
      }
      &:first-child {
        border-bottom: 1px solid $borderColor1;
        > span {
          color: $fontColor4;
        }
      }
    }
  }
  .mt5{
      margin:45px 0 57px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .mt6{
      margin: 22px 0 0 0;
      .mt6_box{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .item{
              display: flex;
                align-items: center;
                height: 80px;
                justify-content: center;
                color: $fontColor3;
                font-size: 13px;
                background:#FCD5D5;
            }
            &.mt6_box1{
                margin-bottom: 30px;
                .item{
                    width: 100%;
                }
            }
            &.mt6_box3{
                margin-bottom: 10px;
                .item{
                    width: 32.6%;
                }
            }
            &.mt6_box4{
                margin-bottom: 10px;

                .item{
                    width: 24.2%;
                }
            }
            &.mt6_box5{
                .item{
                    width: 19.2%;
                }
            }
      }
  }
}
</style>
