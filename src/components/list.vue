<template>
  <div>
    <div class="list">
      <h3 class="title">{{bigTitle}}</h3>
      <ul class="clearfix">
        <li v-for="item in dataList">
          <div class="top">
            <a :href="item.alt" target="_blank">
                <img :src="item.images.medium" alt="">
              </a>
          </div>
          <div class="bottom">
            <div class="movie-title">{{item.title}}</div>
            <div class="movie-daoyan">导演：
              <span v-for="(another,index) in item.directors">
                  <span>{{index>=item.directors.length-1?another.name:another.name+"、"}}</span>
              </span>
            </div>
            <div class="movie-zhuyan">主演：
              <span v-for="(actor,index) in item.casts">
                  <span>{{index>=item.casts.length-1?actor.name:actor.name+"、"}}</span>
              </span>
            </div>
            <div class="year">年份：{{item.year}}</div>
            <div class="score">
              评分：{{item.rating.average}}
            </div>
          </div>
        </li>
      </ul>
      <div class="footer">
        <div class="prev page" @click="prev">上一页</div>
        <div class="page" v-for="p in pageList" @click="currentPage(p)">
          <span>{{p}}</span>
        </div>
        <div class="next page" @click="next">下一页</div>
      </div>
      <el-pagination small layout="prev, pager, next" next-text="下一页" prev-text="上一页" :page-count="pageTotal" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import "../../static/css/list.css";
  const jsonp = require("jsonp")
  export default {
    data() {
      return {
        bigTitle: "",
        page: 0,
        pageTotal: 0,
        pageList: [],
        dataList: [],
        counts: 0,
        total: 0,
        href: ""
      }
    },
    methods: {
      getData(page) {
        this.href = location.hash.slice(2);
        if (this.href == "in_theaters") {
          this.bigTitle = "正在热播";
        } else if (this.href == "coming_soon") {
          this.bigTitle = "即将上映";
        } else if (this.href == "top250") {
          this.bigTitle = "top250";
        } else {
          this.bigTitle = "搜索结果";
        }
        if (this.href == "search") {
          var text = (this.$route.params.val);
          jsonp("http://api.douban.com//v2/movie/search?q={" + text + "}&start=" + (page * 9) + "&count=9", (err, data) => {
            this.dataList = data.subjects;
            this.counts = data.count;
            this.total = data.total;
            this.pageTotal = Math.ceil(this.total / this.counts);
            this.pageList = [];
            for (var i = 0; i < this.pageTotal; i++) {
              this.pageList.push(i + 1);
            };
          });
        } else {
          jsonp("http://api.douban.com//v2/movie/" + this.href + "?start=" + (page * 9) + "&count=9", (err, data) => {
            this.dataList = data.subjects;
            this.counts = data.count;
            this.total = data.total;
            this.pageTotal = Math.ceil(this.total / this.counts);
            this.pageList = [];
            for (var i = 0; i < this.pageTotal; i++) {
              this.pageList.push(i + 1);
            };
          });
        }
      },
      next() {
        this.page++;
        this.page = this.page > this.pageTotal - 1 ? this.pageTotal - 1 : this.page;
        this.getData(this.page);
      },
      prev() {
        this.page--;
        this.page = this.page < 0 ? 0 : this.page;
        this.getData(this.page);
      },
      currentPage(page) {
        this.page = page - 1;
        this.getData(this.page);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.page = val - 1;
        this.getData(this.page);
      }
    },
    created() {
      this.getData(this.page);
    },
    props: ['String'],
    components: {

    },
    filters: {

    }
  }

</script>

<style>

</style>