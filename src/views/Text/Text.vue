<template>
  <div class="text_wrap">
    <div class="router_view_title">Typography文字</div>
    <p class="router_view_info router_view_info1">
      我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。字体方案是基于「动态秩序」的设计原则，结合了自然对数以及音律的规则得出的。我们对字体进行统一规范，力求在界面中有最佳的展示效果
    </p>

    <div class="router_view_title_sub">字体</div>
    <div class="font_type">
      Open Sans
    </div>
    <div class="router_view_title_sub">主文案大小</div>

    <div class="router_view_info">
      我们基于电脑显示器阅读距离（50cm）以及最佳阅读角度（0.3）对网站的主字体定了14px大小，以保证在多数常用显示器上的用户阅读效率最佳。
    </div>

   <img class="mt0" src="./images/img1.jpg" alt="" />

    <div class="text_size_title">字号</div>
    <div class="text_size">
      <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <th width="18%">大小</th>
            <th width="18%">行高</th>
            <th width="22%">示例</th>
            <th width="42%">描述</th>
          </tr>
          <tr class="text_size01">
            <td>12px</td>
            <td>16px</td>
            <td>FS.COM</td>
            <td>
              辅助装饰性文字、头部、底部内容文字<em
                >（如页面底部菜单文字等）</em
              >
            </td>
          </tr>
          <tr class="text_size02">
            <td>13px</td>
            <td>22px</td>
            <td>FS.COM</td>
            <td>用于特殊文字<em>（详情页面参数、首页价格库存等）</em></td>
          </tr>
          <tr class="text_size03">
            <td>14px</td>
            <td>24px / 20px</td>
            <td>FS.COM</td>
            <td>用于篇幅较多的正文字体<em>（产品标题处可使用20px行高)</em></td>
          </tr>
          <tr class="text_size04">
            <td>16px</td>
            <td>26px</td>
            <td>FS.COM</td>
            <td>内容层文字<em>（如banner图副标题、内容次标题）</em></td>
          </tr>
          <tr class="text_size05">
            <td>20px</td>
            <td>30px</td>
            <td>FS.COM</td>
            <td>版块标题文字<em>（如首页推荐版块标题）</em></td>
          </tr>
          <tr class="text_size06">
            <td>26px</td>
            <td>34px</td>
            <td>FS.COM</td>
            <td>标题文字<em>（详情页面、列表页面标题）</em></td>
          </tr>
          <tr class="text_size07">
            <td>40px</td>
            <td>48px</td>
            <td>FS.COM</td>
            <td>Banner图标题文字</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="router_view_title_sub">字阶与行高</div>

    <div class="router_view_info">
      字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。
    </div>
    <img class="mt1" src="./images/img2.jpg" alt="" />
    <div class="router_view_title_sub">字重</div>
    <div class="router_view_info">
      字重的选择同样基于秩序、稳定、克制的原则。英文情况下，只出现Regular一级Semilbold的两种字体重量，分别对应代码中的400和600。
    </div>
    <div class="mt2">
      <div class="mt2_box">
        <div class="mt2_info1">FS.COM</div>
        <div class="mt2_info2">Regular 400</div>
      </div>
      <div class="mt2_box">
        <div class="mt2_info1">FS.COM</div>
        <div class="mt2_info2">Semibold 600</div>
      </div>
    </div>
    <div class="router_view_title_sub">规范运用</div>

    <div class="mt3">
      <div class="mt3_box">
        <p class="mt3_box_title">间隙规范</p>
        <table
          class="mt3_table"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th width="20%">层级</th>
              <th width="20%">字体大小</th>
              <th width="20%">行高</th>
              <th width="20%">上距离</th>
              <th width="20%">下距离</th>
            </tr>
            <tr>
              <td>辅助文字</td>
              <td>13px</td>
              <td>22px</td>
              <td>0</td>
              <td>20px</td>
            </tr>
            <tr>
              <td>正文</td>
              <td>14px</td>
              <td>24px</td>
              <td>0</td>
              <td>25px</td>
            </tr>
            <tr>
              <td>标题一</td>
              <td>16px</td>
              <td>26px</td>
              <td>40px</td>
              <td>25px</td>
            </tr>
            <tr>
              <td>标题二</td>
              <td>20px</td>
              <td>30px</td>
              <td>45px</td>
              <td>25px</td>
            </tr>
            <tr>
              <td>标题三</td>
              <td>26px</td>
              <td>34px</td>
              <td>50px</td>
              <td>30px</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt3_box">
        <p class="mt3_box_title">前端规范</p>
        <table
          class="mt3_table"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th width="20%">层级</th>
              <th width="20%">字体大小</th>
              <th width="20%">行高</th>
              <th width="20%">上距离</th>
              <th width="20%">下距离</th>
            </tr>
            <tr>
              <td>辅助文字</td>
              <td>13px</td>
              <td>22px</td>
              <td>0</td>
              <td>10px</td>
            </tr>
            <tr>
              <td>正文</td>
              <td>14px</td>
              <td>24px</td>
              <td>0</td>
              <td>15px</td>
            </tr>
            <tr>
              <td>标题一</td>
              <td>16px</td>
              <td>26px</td>
              <td>30px</td>
              <td>15px</td>
            </tr>
            <tr>
              <td>标题二</td>
              <td>20px</td>
              <td>30px</td>
              <td>35px</td>
              <td>15px</td>
            </tr>
            <tr>
              <td>标题三</td>
              <td>26px</td>
              <td>34px</td>
              <td>42px</td>
              <td>22px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="router_view_title_sub">段落文本示例</div>

    <div class="mt4">
      <div class="mt4_box">
        <div class="mt4_box_title">Building an efficiently connected world</div>
        <div class="mt4_box_info">
          FS delivers cutting-edge technology on a global scale. Our aim is to
          help the customer assess innovative technology options which meet
          their requirements. Cooperating with high-quality raw material
          suppliers and placing a strong emphasis on product compatibility and
          quality, we provide high quality products at affordable prices. We
          promise premium quality products along with great pre and after sales
          product support. Our relentless pursuit in achieving customer
          satisfaction is the reason why the customers choose us.
        </div>
      </div>
      <div class="mt4_style_box">
        <div class="style_info">
          标题<br />
          font-size: 20px<br />
          color:#232323<br />
          font-weight:600
        </div>
        <div class="style_info">
          正文<br />
          font-size: 14px<br />
          color:#616265<br />
          line-height:24px<br />
          font-weight:400
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Text",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text_wrap {
  .router_view_info1 {
    margin-bottom: 52px;
  }
  .font_type {
    margin: 30px 0 54px 0;
    font-size: 26px;
    color: #000;
  }
  .text_size_title {
    font-size: 16px;
    color: $fontColor2;
  }
  .mt0{
    margin:47px 0 90px 220px ;
  }
  .mt1{
    margin:24px 0 50px 0;
  }
  .text_size {
    padding-right: 30px;
    margin-bottom: 46px;
    table {
      text-align: left;
      tr {
        th {
          font-size: 14px;
          font-weight: normal;
          color: #232323;
          line-height: 60px;
          border-bottom: 1px solid #e5e5e5;
        }
        td {
          line-height: 60px;
          border-bottom: 1px dashed #e5e5e5;
          em {
            font-style: normal;
            color: #999;
          }
          &:last-child {
            font-size: 14px;
          }
        }
      }

      .text_size01 td {
        font-size: 12px;
      }
      .text_size02 td {
        font-size: 13px;
      }
      .text_size03 td {
        font-size: 14px;
      }
      .text_size04 td {
        font-size: 16px;
      }
      .text_size05 td {
        font-size: 20px;
      }
      .text_size06 td {
        font-size: 26px;
      }
      .text_size07 td {
        font-size: 40px;
      }
    }
  }
  .mt2 {
    display: flex;
    align-items: center;
    margin: 30px 0 60px 0;
    justify-content: flex-start;
    .mt2_box {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 214px;
      height: 120px;
      margin-right: 20px;
      border: 1px solid $borderColor1;
      text-align: center;
      font-size: 14px;
      color: #999;
      padding: 35px 0;
      .mt2_info1 {
        font-size: 30px;
        color: $fontColor1;
        margin-bottom: 10px;
      }
      &:last-child {
        font-weight: 600;
      }
    }
  }
  .mt3 {
    margin: 30px 0 60px 0;
    width: 100%;
    .mt3_box {
      width: 45%;
      display: inline-block;
      margin-right: 5%;
      .mt3_box_title {
        font-size: 14px;
        color: #999;
        margin-bottom: 20px;
      }
      .mt3_table {
        font-size: 14px;
        color: #232323;

        tr {
          th {
            text-align: left;
            font-weight: normal;
            padding-bottom: 18px;
          }
          td {
            line-height: 40px;
          }
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .mt4 {
    display: flex;
    align-items: center;
    .mt4_box {
      width: 690px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 28px;
      border: 1px solid $borderColor1;
      margin-right: 70px;
      .mt4_box_title {
        font-size: 20px;
        color: $fontColor1;
        font-weight: 600;
        margin-bottom: 18px;
      }
      .mt4_box_info {
        font-size: 14px;
        color: $fontColor2;
        line-height: 24px;
        font-weight: 400;
      }
    }
    .mt4_style_box{
        font-size: 14px;
        color: #616265;
        line-height: 24px;
        font-weight: 400;
        .style_info{
            margin-bottom: 24px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
  }
}
</style>
