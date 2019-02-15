<template>
  <div :style="conheight">
    <!-- <circle-menu
      class="addButton"
      @touchmove.prevent
      type="middle"
      :number="1"
      mask="black"
      btn
      circle
      @click="addVisible = true">
    </circle-menu> -->
    <el-button class="addButton" icon="el-icon-circle-plus" @click="addVisible = true"></el-button>
    <el-dialog
      :visible.sync="loginVisible"
      fullscreen="true"
    >
      <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="100">
      </avatar>
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-info"
        v-model="input21">
      </el-input>
      <br><br>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-info"
        v-model="input21">
      </el-input>
      <br><br>
      <el-input
        placeholder="请输入验证码"
        prefix-icon="el-icon-info"
        v-model="input21">
      </el-input>
      <hr style="margin-top:20px;width:98%">
      <a style="float:left">忘记密码</a>
      <a style="float:right">注册</a>
      <el-button style="margin-top:20px;width:100%" type="primary" @click="loginVisible = false">登录</el-button>
    </el-dialog>
    <el-dialog
      :visible.sync="addVisible"
      fullscreen="true"
      style="text-align:center"
    >
      <div style="width:90%;height:400px;margin:0 auto;text-align:center;border:1px dashed #000000">
      </div>
      <span>添加图片：</span><br>
      <el-button icon="el-icon-circle-plus"></el-button><br>
      <span>添加文字：</span><br>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea3">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button style="float:left" @click="addVisible = false">取 消</el-button>
        <el-button style="float:right" type="primary" @click="addVisible = false">发 布</el-button>
      </span>
    </el-dialog>
    <div class="navbar" @touchmove.prevent>
      <span @click="showSide">
        <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="45"></avatar>
      </span>
      <!-- <avatar username="Jane Doe" :src="headPic" :size="100"></avatar> -->
      <!-- <img class="set-head-icon" :src="headPic" style="float:left;width: 40px;height: 40px;" @click="showSide"> -->
      <el-button type="text" style="float:right" @click="loginVisible = true">登录</el-button>
    </div>
    <div class="navigation" @touchmove.prevent style="background: blue;">
      <!-- <el-button style="float:right" @click="loginVisible = true">菜单</el-button> -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关注</el-dropdown-item>
          <el-dropdown-item>发泄</el-dropdown-item>
          <el-dropdown-item>分享</el-dropdown-item>
          <el-dropdown-item>倾诉</el-dropdown-item>
          <el-dropdown-item>寻找</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <transition name="fade" @touchmove.stop.prevent>
        <!-- 这部分功能主要是关闭侧栏菜单，类似一层遮罩的效果 -->
        <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
      </transition>
      <transition name="slide-fade">
        <!-- 这里才是侧栏代码部分 -->
        <div class="side-content" v-show="isRellyShow">
          <!-- css transition动画 加深理解 -->
          <a class="head">
            <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="150"></avatar>
            <br>
            <span>小明</span>
          </a>
          <ul>
            <li style="list-style-type: none;">关注的人</li>
            <li style="list-style-type: none;">个人收藏</li>
            <li style="list-style-type: none;">关注度</li>
            <li style="list-style-type: none;">点赞数</li>
            <li style="list-style-type: none;">个人笔记</li>
          </ul>
        </div>
      </transition>
    </div>
    <v-touch style="width: 100%;margin:0px;height: 100%;" @swipeup="slideNext" @swipedown="slidePre" @swipeleft="reload" @swiperight="reload">
      <slider ref="slider" :options="option">
        <slideritem
          v-for="item in [1,2]"
          :key="item.index"
          style="color:black"
        >
          <div style="width: 100%;margin: 0px;height:100%;">
            <waterfall
              :line="line"
              :line-gap="line_gap"
              :watch="itemList"
              ref="waterfall"
            >
              <waterfall-slot
                v-for="(item, index) in itemList"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.index"
                move-class="item-move"
              >
                <div style="width:100%;height:auto;position: absolute;top: 1%;left: 1%;right: 1%;bottom: 1%;font-size: 14px;">
                  <el-card :body-style="{ padding: '0px' }" shadow="always" style="background:#dde6ef;padding:0px">
                    <div style="text-align:center" @click="showUser=true">
                      <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="30"></avatar>
                      <span style="padding:1px;font-size:15px">小明</span>
                    </div>
                    <div style="width:100%;margin: 0,10,0,10" @click="showContentDetail=true">
                      <img src="../assets/two.gif" style="width:100%;display: block;">
                      <span style="width:100%;float:left;overflow:hidden;text-overflow: ellipsis;white-space: normal;text-align:left">今天天气很好,不知道什么时候才能遇见</span>
                    </div>
                    <br><br><br>
                    <!-- <div style="width:100%;margin: 0,10,0,10" @click="dialogVisible=true">
                      <span style="width:100%;float:left;overflow:hidden;text-overflow: ellipsis;white-space: normal;text-align:left">今天天气很好,不知的合法化 合法的恢复大会反对和和和获得丰厚道什么时候才能遇见</span>
                      <img src="../assets/two.gif" style="width:100%;display: block;">
                    </div>
                    <br> -->
                    <div>
                        <time class="time">{{currentDate}}</time><br>
                        <span style="font-size:12px">浏览{{goodNumber}}次</span>
                        <el-button type="text" class="button" @click="addOne">点赞</el-button>
                        <span style="font-size:12px">{{goodNumber}}</span>
                        <el-button type="text" class="button" @click="addOne">评论</el-button>
                        <span style="font-size:12px">1566</span>
                    </div>
                  </el-card>
                  <el-dialog
                    :visible.sync="showContentDetail"
                    fullscreen="true"
                    :modal="false">
                    <div style="text-align:center">
                      <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="30"></avatar>
                      <span style="padding:1px;font-size:15px">小明</span>
                    </div>
                    <div style="width:100%;margin: 0,10,0,10" @click="dialogVisible=true">
                      <img src="../assets/two.gif" style="width:100%;display: block;">
                      <span style="width:100%;float:left;overflow:hidden;text-overflow: ellipsis;white-space: normal;text-align:left">今天天气很好,不知道什么时候才能遇见</span>
                    </div>
                    <br><br><br>
                    <div style="width:100%;margin: 0,10,0,10" @click="dialogVisible=true">
                      <span style="width:100%;float:left;overflow:hidden;text-overflow: ellipsis;white-space: normal;text-align:left">今天天气很好,不知的合法化 合法的恢复大会反对和和和获得丰厚道什么时候才能遇见</span>
                      <img src="../assets/two.gif" style="width:100%;display: block;">
                    </div>
                    <br>
                    <div>
                        <time class="time">{{currentDate}}</time><br>
                        <span style="font-size:12px">浏览{{goodNumber}}次</span>
                        <el-button type="text" class="button" @click="addOne">点赞</el-button>
                        <span style="font-size:12px">{{goodNumber}}</span>
                        <el-button type="text" class="button" @click="addOne">评论</el-button>
                        <span style="font-size:12px">1566</span>
                    </div>
                  </el-dialog>
                  <el-dialog
                    :visible.sync="showUser"
                    fullscreen="true"
                    :modal="false">
                    <div>
                      <div style="background:#edff008a">
                        <avatar fullname="My Sticker" image="https://raw.githubusercontent.com/ssouron/vue-avatar-component/master/img/example3.jpg" :size="150"></avatar>
                        <br>
                        <span>小明</span>
                      </div>
                      <br>
                      <hr>
                      <div style="height:800px">
                        <el-steps direction="vertical" :active="2">
                          <el-step title="1"></el-step>
                          <el-step title="2"></el-step>
                          <el-step title="3">
                            <div slot="description">
                              <img src="../assets/two.gif" style="width:100%;display: block;">
                              <span style="width:100%;float:left;overflow:hidden;text-overflow: ellipsis;white-space: normal;text-align:left">今天天气很好,不知道什么时候才能遇见</span>
                            </div>
                          </el-step>
                        </el-steps>
                      </div>
                    </div>
                  </el-dialog>
                </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <!-- <water :itemList="itemList"></water> -->
        </slideritem>
      </slider>
    </v-touch>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'home',
  data () {
    return {
      goodNumber: 100,
      sible: false,
      currentDate: '2019-11-12',
      showContentDetail: false,
      showUser: false,
      line: 'v',
      line_gap: 50,
      textarea3: 'hahahaha',
      loginVisible: false,
      addVisible: false,
      conheight: {
        height: ''
      },
      option: {
        effect: 'fade',
        currentPage: 0,
        direction: 'horizontal',
        pagination: true,
        thresholdDistance: 50,
        thresholdTime: 300,
        speed: 300,
        loop: true
      },
      itemList: [
        {
          index: 1,
          width: 50,
          height: 100
        },
        {
          index: 2,
          width: 50,
          height: 100
        },
        {
          index: 3,
          width: 50,
          height: 100
        },
        {
          index: 4,
          width: 50,
          height: 100
        }
      ],
      headPic: '../assets/head.jpg'
    }
  },
  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
    window.addEventListener('resize', this.getWidth)
    this.getWidth()
  },
  computed: {
    isRellyShow () {
      return this.$store.getters.isShowMethod
    }
  },
  methods: {
    showDetail () {
      console.log('==============')
    },
    addOne () {
      console.log('+++++++++++++++')
      this.goodNumber = this.goodNumber + 1
    },
    getHeight () {
      this.conheight.height = window.innerHeight + 'px'
    },
    getWidth () {
      this.line_gap = window.innerWidth / 3 - 6
    },
    slideNext () {
      this.$refs.slider.$emit('slideNext')
      this.itemList.sort(function () {
        return Math.random() - 0.5
      })
    },
    slidePre () {
      this.$refs.slider.$emit('slidePre')
      this.itemList.sort(function () {
        return Math.random() - 0.5
      })
    },
    showSide () {
      this.$store.dispatch('showSideBar')
    },
    reload () {
      this.itemList.sort(function () {
        return Math.random() - 0.5
      })
    },
    hideSide () {
      this.$store.dispatch('hideSideBar')
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 10%;
  z-index: 10;
}
.navigation {
  position: fixed;
  left: 88%;
  top: 0;
  margin-top: 10%;
  z-index: 10;
}
.addButton {
  position: fixed;
  left: 88%;
  top: 80%;
  margin: 0px;
  color: royalblue;
  z-index: 10;
}
.set-head-icon {
  width: 2em;
  border-radius: 50%;
}
.menu-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.side-content {
  z-index: 11;
  position: fixed;
  width: 200px;
  height: 100%;
  background: #ffffffc2;
  top: 0;
  left: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
}
.fade-enter-to,
.fade-leave-to {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-to {
  transition: transform 0.3s;
  transform: translate(0px, 0px);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-286px, 0px);
  transform: translate(-286px, 0px);
  -webkit-transition: opacity 0.3s ease-in-out 0.3s,
    -webkit-transform 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
}
.head {
  display: block;
  width: 197px;
  height: 188px;
  background: #ffffff;
  background-size: cover;
  border: 1px solid #fff;
  overflow: hidden;
}
.item {
  position: absolute;
  top: 1%;
  left: 1%;
  right: 1%;
  bottom: 1%;
  font-size: 15px;
}
.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.wf-transition {
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
}
.wf-enter {
  opacity: 0;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
.time {
  float:left;
  font-size: 13px;
  color: #999;
}
</style>
