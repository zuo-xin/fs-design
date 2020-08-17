<template>
  <div class="button">
    <div class="router_view_title">Button 按钮</div>
    <p class="router_view_info router_view_info1">
      按钮指导用户采取你希望他们采取的行动，帮助用户避免犯错
    </p>
    <div class="router_view_title_sub">按钮的圆角</div>
    <div class="router_view_info">
      圆角大小所带来的不仅仅是视觉表现，还更多影响着用户的使用体验以及对于产品而言的整体的认知
    </div>
    <div class="button_title1">圆角的特性</div>
    <div class="router_view_info router_view_info2">
      相比直角按钮，在使用圆角的按钮中，视觉上总是给人一种柔和亲近的感觉，当几个圆角按钮进行排列时，能够感受到圆角按钮更容易被点击。因此在使用的按钮中，我们添加了圆角的细节元素。<br />圆角本身大致有一下三个主要的特性——亲和感、易辨识和强聚焦
    </div>

    <div class="mt0">
      <div class="mt0_box">亲和感</div>
      <div class="mt0_box">易辨识</div>
      <div class="mt0_box">强聚焦</div>
    </div>

    <div class="button_title1">圆角的聚焦性</div>
    <div class="router_view_info router_view_info2">
      每种形状都自带视觉引导的属性，圆形以及圆角矩形不存在任何尖角，没有突出的焦点，圆周以及圆角矩形的四个圆角会产生一个向中心过度的趋势，引导视线居中到形状内部。
    </div>

    <img class="mt1" src="./images/img1.jpg" />
    <div class="router_view_title_sub">按钮的样式</div>
    <div class="router_view_info router_view_info3">
      按钮宽度根据文字长度进行适应，高度40px(包含边框)，描边按钮描边为1px,（账户中心使用次按钮高度为34px）<br />按钮文字距离按钮左右间距为30px；带图标的按钮图标距文字10px；按钮文字大小14px，圆角20px。
    </div>
    <div class="button_title1">主按钮</div>
    <div class="router_view_info">
      一级按钮在同一操作区域最多出现一次，主要用于加购按钮、结算按钮等重要级最高的操作上;
    </div>
    <table class="mt2 mt2_main">
      <thead>
        <tr>
          <th></th>
          <th>Default</th>
          <th>Hover</th>
          <th>Processing</th>
          <th>Disabled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>红色实心主按钮</td>
          <td>
            <button type="button" class="btn btn_default">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_hover">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_processing">
              <svg class="svg" width="440" height="440" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir1"
                  stroke="#fff"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir2"
                  stroke="#fff"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  stroke-dasharray="170 1069"
                ></circle>
              </svg>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn_disabled">Button</button>
          </td>
        </tr>
        <tr>
          <td>蓝色实心主按钮</td>
          <td>
            <button type="button" class="btn btn_default">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_hover">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_processing">
              <svg class="svg" width="440" height="440" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir1"
                  stroke="#fff"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir2"
                  stroke="#fff"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  stroke-dasharray="170 1069"
                ></circle>
              </svg>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn_disabled">Button</button>
          </td>
        </tr>
        <tr>
          <td>灰色描边主按钮</td>
          <td>
            <button type="button" class="btn btn_default">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_hover">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_processing">
              <svg class="svg" width="440" height="440" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir1"
                  stroke="#fff"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir2"
                  stroke="#fff"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  stroke-dasharray="170 1069"
                ></circle>
              </svg>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn_disabled">Button</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="button_title1">次按钮</div>
    <div class="router_view_info">
      当有多按钮并排使用或单按钮使用时，有需要弱化的操作，可使用次按钮;（账户中心使用次按钮高度为34px）
    </div>

    <table class="mt2 mt2_sub">
      <tbody>
        <tr>
          <td>浅灰描边次按钮</td>
          <td>
            <button type="button" class="btn btn_default">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_hover">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_processing">
              <svg class="svg" width="440" height="440" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir1"
                  stroke="#fff"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir2"
                  stroke="#fff"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  stroke-dasharray="170 1069"
                ></circle>
              </svg>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn_disabled">Button</button>
          </td>
        </tr>
        <tr>
          <td>账户中心次按钮</td>
          <td>
            <button type="button" class="btn btn_default">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_hover">Button</button>
          </td>
          <td>
            <button type="button" class="btn btn_processing">
              <svg class="svg" width="440" height="440" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir1"
                  stroke="#fff"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  stroke-width="40"
                  class="cir2"
                  stroke="#fff"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  stroke-dasharray="170 1069"
                ></circle>
              </svg>
            </button>
          </td>
          <td>
            <button type="button" class="btn btn_disabled">Button</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="router_view_info router_view_info4">
      注：目前禁用状态仅用在结算流程中，其他地方的使用方式为常规按钮加提示语的方式体现禁用状态。操作禁用时，请勿使用鼠标禁用手势。
    </div>

    <div class="button_title1">
      特殊按钮
    </div>
    <div class="router_view_info">
      在表单页m端及登录页面等需要与输入框搭配使用的场景时，按钮与输入框统一为小圆角（3px）
    </div>
    <div class="mt3">
      <div class="mt3_top">
        <span>Password</span>
        <span>Forgot password?</span>
      </div>
      <div class="mt3_inp">
        <input
          :type="show_pwd ? 'text' : 'password'"
          class="pwd"
          v-model="pwd"
          placeholder="Please enter your password"
        />
        <span class="show_pwd" @click.stop="toogleShowPwd">{{
          show_pwd ? "hide" : "show"
        }}</span>
      </div>
      <button type="button" class="sbtn btn_red">Sign in</button>
    </div>

    <div class="button_title1">文字按钮</div>
    <div class="router_view_info">
      弱化的按钮，采用更轻量的按钮样式，可用于需大面积展示按钮场景;<br />浅灰变深灰；深灰加下滑线；彩色加下划线
    </div>

    <div class="mt4">
      <div class="mt4_item">
        <span>Default</span>
        <span>Link#646466</span>
        <span>Link#19191A</span>
        <span>Link#105AA3</span>
      </div>
      <div class="mt4_item">
        <span>Hover</span>
        <span>Link#19191A</span>
        <span class="underline">Link#19191A</span>
        <span class="underline">Link#105AA3</span>
      </div>
    </div>

    <div class="button_title1">图标按钮</div>
    <div class="router_view_info">
      图标提供视觉线索，避免逐字阅读按钮文案，更高效地使用界面；
    </div>
    <div class="router_view_info router_view_info5">
      需要在较小的空间内展示尽量多的按钮，使用纯图标按钮必须有 Tooltip
      提示按钮含义；
    </div>

    <div class="button_title1">在按钮中添加图标</div>
    <div class="router_view_info router_view_info6">
      用于对按钮含义补充解释，提高按钮识别效率；
    </div>
    <div class="button_title1">在按钮中添加图标</div>
    <div class="router_view_info router_view_info6">
      用于对按钮含义补充解释，提高按钮识别效率；
    </div>

    <div class="router_view_title_sub">位置</div>
    <div class="router_view_info">
      将按钮区放置于用户浏览路径中，便于被用户发现，如 “F 浏览模式” 和 “Z
      浏览模式” 。
    </div>
    <img src="./images/img2.jpg" class="mt5" alt="" />
    <div class="router_view_title_sub">如何确定按钮区的放置位置</div>
    <div class="router_view_info">
      页面/卡片/一组信息都能够呈现一个主题，主题的描述可以抽象为三个区域：<br />
      Header：主题的标题和摘要信息内容区的导航等<br />
      Body：具体内容<br />
      Footer：主题的补充信息和工具栏等<br />
      将按钮区放置在不同的区域，有不同的含义：见下图。
    </div>
    <img src="./images/img3.jpg" class="mt6" alt="" />
    <div class="router_view_title_sub">按钮排布</div>
    <div class="button_title1">按钮水平分布</div>
    <div class="router_view_info">
      两个按钮之间的间距为10px，主要操作按钮居右。
    </div>

    <div class="mt7">
      <button class="btn btn_white" type="button">Cancel</button>
      <button class="btn btn_red" type="button">Confirm</button>
    </div>

    <div class="button_title1">按钮垂直分布</div>
    <div class="router_view_info">
      考虑到小语种字符长度不一，视觉宽度为150px；<br />样式用100%控制，主要操作按钮居上。
    </div>
    <div class="mt8 ">
      <button class="btn btn_red" type="button">Write a review</button>
      <button class="btn btn_white" type="button">Buy Again</button>
    </div>

    <div class="button_title1">按钮自适应100%宽度</div>
    <div class="router_view_info">
      宽度为自适应100%宽度
    </div>
    <div class="mt9">
      <button class="btn btn_red" type="button">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      show_pwd: false,
      pwd: "123456",
    };
  },
  methods: {
    toogleShowPwd() {
      this.show_pwd = !this.show_pwd;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.button {
  .router_view_info1 {
    margin-bottom: 60px;
  }
 
  .router_view_info3 {
    margin-bottom: 32px;
  }
  .router_view_info4 {
    margin-bottom: 54px;
  }
  .router_view_info5 {
    color: #999999;
    margin-bottom: 32px;
  }
  .router_view_info6 {
    margin-bottom: 55px;
  }
  .button_title1 {
    font-size: 16px;
    color: $fontColor1;
    margin-bottom: 16px;
  }
  .mt0 {
    padding-left: 83px;
    display: flex;
    align-items: center;
    margin: 27px 0 50px 0;
    .mt0_box {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: $fontColor3;
      width: 118px;
      height: 118px;
      border-radius: 118px;
      margin-right: 65px;
      background: rgba(255, 245, 245, 1);
    }
  }
  .mt1 {
    margin: 35px 0 60px 0;
  }
  .mt2 {
    thead {
      color: $fontColor2;
      font-size: 14px;
      tr {
        th {
          font-weight: normal;
          text-align: left;
          padding-bottom: 8px;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 10px 40px 10px 0;
          .btn {
            display: flex;
            width: 103px;
            height: 40px;
            font-size: 14px;
            color: #fff;
            align-items: center;
            justify-content: center;
            border-radius: 40px;
            cursor: pointer;
            .svg {
              width: 20px;
              animation: rotate 1s linear infinite;
              .cir1 {
                opacity: 0.3;
              }
            }
            &.btn_disabled {
              cursor: not-allowed;
            }
          }
          &:nth-child(1) {
            color: $fontColor1;
            font-size: 14px;
            padding-right: 38px;
          }
        }
      }
    }
    &.mt2_main {
      margin: 19px 0 35px 0;
      tbody {
        tr {
          &:nth-child(1) {
            .btn_default {
              background: $bgColor2;
              transition: all 0.3s;
              &:hover {
                background: #8f0a0e;
              }
            }
            .btn_hover {
              background: #8f0a0e;
            }
            .btn_processing {
              background: $bgColor2;
              opacity: 0.8;
            }
            .btn_disabled {
              background: $bgColor2;
              opacity: 0.5;
            }
          }
          &:nth-child(2) {
            .btn_default {
              background: #fff;
              border: 1px solid $borderColor3;
              transition: all 0.3s;
              color: $fontColor4;
              &:hover {
                background: #8f0a0e;
                color: #fff;
              }
            }
            .btn_hover {
              background: #8f0a0e;
            }
            .btn_processing {
              background: $bgColor2;
              opacity: 0.8;
            }
            .btn_disabled {
              background: #e1b5b7;
              opacity: 0.5;
            }
          }
          &:nth-child(3) {
            .btn_default {
              background: #fff;
              border: 1px solid $fontColor1;
              transition: all 0.3s;
              color: $fontColor1;
              &:hover {
                background: #4c4948;
                color: #fff;
              }
            }
            .btn_hover {
              background: #4c4948;
            }
            .btn_processing {
              background: #4c4948;
              opacity: 0.6;
            }
            .btn_disabled {
              background: #4c4948;
              opacity: 0.3;
            }
          }
        }
      }
    }
    &.mt2_sub {
      margin: 4px 0 10px 0;
      tbody {
        tr {
          &:nth-child(1),
          &:nth-child(2) {
            .btn_default {
              background: #fff;
              border: 1px solid $borderColor4;
              transition: all 0.3s;
              color: $fontColor1;
              &:hover {
                border: 1px solid #4c4948;
              }
            }
            .btn_hover {
              color: $fontColor1;
              border: 1px solid #4c4948;
            }
            .btn_processing {
              background: #4c4948;
              opacity: 0.6;
            }
            .btn_disabled {
              background: #fff;
              border: 1px solid $borderColor4;
              color: $fontColor1;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
  .mt3 {
    width: 380px;
    margin: 25px 0 58px 0;
    .mt3_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: $fontColor2;
      margin-bottom: 5px;
    }
    .mt3_inp {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 38px;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      transition: all 0.3s;
      font-size: 13px;
      color: #232323;
      margin-bottom: 45px;

      .pwd {
        flex: 1 1 auto;
        text-indent: 10px;
        user-select: text;
        padding: 10px 0;
        line-height: 16px;
      }
      .show_pwd {
        display: inline-block;
        flex: 0 0 60px;
        height: 38px;
        line-height: 38px;
        padding-right: 10px;
        text-align: right;
        cursor: pointer;
      }
    }
    .sbtn {
      width: 100%;
      height: 40px;
      border: 1px solid #c00000;
      border-radius: 2px;
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      line-height: 38px;
      background-color: #c00000;
      cursor: pointer;
    }
  }
  .mt4 {
    margin: 15px 0 40px 0;
    .mt4_item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      font-size: 14px;
      color: $fontColor1;
      > span {
        margin-right: 62px;
        min-width: 90px;
        cursor: pointer;
        &.underline {
          text-decoration: underline;
        }
        &:nth-child(1) {
          min-width: 48px;
        }
        &:nth-child(4) {
          color: #105aa3;
        }
      }
      &:nth-child(1) {
        > span {
          &:nth-child(2) {
            color: #646466;
            &:hover {
              color: $fontColor1;
            }
          }
          &:nth-child(3),
          &:nth-child(4) {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .mt5 {
    margin: 15px 0 54px 0;
  }
  .mt6 {
    margin: 15px 0 54px 0;
  }
  .mt7 {
    display: flex;
    align-items: center;
    margin: 20px 0 40px 0;
    .btn {
      display: flex;
      width: 100px;
      height: 40px;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: $fontColor1;
      font-size: 14px;
      border-radius: 40px;
      border: 1px solid $borderColor4;
      margin-right: 10px;
      cursor: pointer;
      &.btn_red {
        color: #fff;
        background: $bgColor2;
        border: none;
        &:hover{
      background: #8F0A0E;
    }
      }
    }
  }
  .mt8 {
    display: flex;
    margin: 14px 0 40px 0;
    flex-direction: column;
    .btn {
      display: flex;
      width: 150px;
      height: 40px;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: $fontColor1;
      font-size: 14px;
      border-radius: 40px;
      border: 1px solid $borderColor4;
      margin-bottom: 10px;
      cursor: pointer;
      &.btn_red {
        color: #fff;
        background: $bgColor2;
        border: none;
        &:hover{
      background: #8F0A0E;
    }
      }
    }
  }
  .mt9 {
    display: flex;
    margin: 18px 0 0 0;
    flex-direction: column;
    .btn {
      display: flex;
      width: 150px;
      height: 40px;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: $fontColor1;
      font-size: 14px;
      border-radius: 40px;
      border: 1px solid $borderColor4;
      margin-bottom: 10px;
      cursor: pointer;
      &.btn_red {
        color: #fff;
        background: $bgColor2;
        border: none;
        &:hover{
      background: #8F0A0E;
    }
      }
    }
  }
  .btn_red{
    transition: all 0.3s;
    
  }
  .btn_white{
    transition: all 0.3s;
    &:hover{
      border:1px solid #4C4948 ;
    }
  }
}
</style>
