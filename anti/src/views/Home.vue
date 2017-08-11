<template>
  <div class="home">
    <v-header></v-header>
    <top-nav></top-nav>
    <el-row>
      <el-col :span="4">
        <side-nav></side-nav>
      </el-col>
      <el-col :span="20">
        <vcontent></vcontent>
      </el-col>

    </el-row>

    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
import vheader from '@/components/header'
import topNav from '@/components/topNav'
import sideNav from  '@/components/sideNav'
import vfooter from '@/components/footer'
import vcontent from  '@/components/content'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components:{'v-header':vheader,'top-nav':topNav,'side-nav':sideNav,'v-footer':vfooter,'vcontent':vcontent}
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
.home {
  position: relative;
  min-height:100%;
}
.footer {
    position: absolute;
    bottom: 0;
  width: 100%;
    height: 60px;
    background-color: rgba(15, 15, 15, 0.55);
  }
</style>
