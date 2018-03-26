<template>
  <div>
    <div class="nav">
      <ul>
        <li>movieCat</li>
        <li class="movie-click" @click="goIntheater">正在热播</li>
        <li class="movie-click" @click="goComingsoon">即将上映</li>
        <li class="movie-click" @click="goTop250">top250</li>
        <li><input type="text" name="" value="" placeholder="请输入搜索内容" v-model="value"></li>
        <li><button type="" @click="goSearch">搜索</button></li>
        <el-button type="text"></el-button>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import '../static/css/nav.css'
  export default {
    data() {
      return {
        value: ""
      }
    },
    methods: {
      goIntheater() {
        this.$router.push({
          name: "intheater"
        })
      },
      goComingsoon() {
        this.$router.push({
          name: "comingsoon"
        })
      },
      goTop250() {
        this.$router.push({
          name: "top250"
        })
      },
      goSearch() {
        if (this.value) {
          this.$router.push({
            name: "search",
            params: {
              val: this.value
            }
          })
        } else {
          this.$alert('搜索内容不能为空！', '温馨提示：', {
          confirmButtonText: '确定'
        });
        }

      },
    },
    props: ['String'],
    components: {

    },
    filters: {

    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>