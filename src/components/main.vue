<template>
  <div class="container">
    <div class="header">
      <t_header></t_header>
    </div>
    <div class="sidebar">
      <t_menu></t_menu>
    </div>
    <div class="content" :class="{'content-collapse' : isCollapse}">
    </div>
  </div>
</template>

<script>
import tmenu from '@/components/common/cmenu.vue'
import theader from '@/components/common/cheader.vue'
import Bus from '@/bus.js'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isCollapse: false
    }
  },
  components: {
    't_menu': tmenu,
    't_header': theader,
    'Bus': Bus
  },
  created () {
    let that = this
    Bus.$on('val', (data) => {
      console.log(data)
      that.isCollapse = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  height: 100%;
  overflow: hidden;
}
.header{
  background-color: #242f42;
  position:relative;
  top:0;
  left:0;
  width:100%;
  height:60px;
}
.sidebar{
  position: absolute;
  display: block;
  top:60px;
  overflow-y: auto;
  left:0;
  bottom:0;
  background-color: #409EFF;
}
.content{
  background-color: #ececec;
  position: absolute;
  left:200px;
  overflow-y: auto;
  top:60px;
  bottom:0;
  right:0;
  -webkit-transition: left .3s ease-in-out;
  -o-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
}
.content-collapse{
  left:65px;
}
</style>
