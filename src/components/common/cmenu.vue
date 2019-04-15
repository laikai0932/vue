<template>
  <el-menu
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    text-color="#fff"
    background-color="#545c64"
    class="el-menu-vertical-demo">
    <template v-for="item in items"><!--第一层循环-->
      <template v-if="item.subs"><!--有二级作用这里-->
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <template v-for="item in item.subs"><!--二级菜单循环-->
            <template v-if="item.subs"><!--有三级作用这里-->
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </template>
                <template v-for="item in item.subs">
                  <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item-group :index="item.index" :key="item.index">
                <el-menu-item :index="item.index">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
import Bus from '../../bus.js'

export default {
  name: 'cmenu',
  data () {
    return {
      isCollapse: false,
      items: [
        {
          icon: 'el-icon-sort',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-service',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-printer',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-share',
          index: '3',
          title: '表单相关',
          subs: [
            {
              icon: 'el-icon-share',
              index: 'form',
              title: '基本表单'
            },
            {
              icon: 'el-icon-share',
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  icon: 'el-icon-share',
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  icon: 'el-icon-share',
                  index: 'markdown',
                  title: 'markdown编辑器'
                }
              ]
            },
            {
              icon: 'el-icon-share',
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-share',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-share',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-share',
          index: 'drag',
          title: '拖拽列表'
        },
        {
          icon: 'el-icon-share',
          index: '6',
          title: '错误处理',
          subs: [
            {
              icon: 'el-icon-share',
              index: 'permission',
              title: '权限测试'
            },
            {
              icon: 'el-icon-share',
              index: '404',
              title: '404页面'
            }
          ]
        }
      ]
    }
  },
  mounted: function () {
    let that = this
    Bus.$on('val', (data) => {
      console.log(data)
      that.isCollapse = data
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
  height: 100%;
  text-align: left;
  width:200px;
  i{
    color:#fff;
  }
}
.el-menu--collapse{
  width: 65px;
}
</style>
