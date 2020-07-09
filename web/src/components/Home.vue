<template>
  <div class="home">
      <!-- 轮播图 -->
       <swiper ref="mySwiper"  :options="swiperOptions">
        <swiper-slide><img src="../images/lun1.jpg" /></swiper-slide>
        <swiper-slide><img src="../images/lun2.jpg" /></swiper-slide>
        <swiper-slide><img src="../images/lun3.jpg" /></swiper-slide>
        <swiper-slide><img src="../images/lun4.jpg" /></swiper-slide>
        <swiper-slide><img src="../images/lun5.jpg" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 首页精灵图 -->
     <div class="nav-home">
        <div class="nav-icons">
          <div class="nav-item">
            <i class="sprite1"></i>
            <div>爆料站</div>
          </div>
          <div class="nav-item">
            <i class="sprite2"></i>
            <div>故事站</div>
          </div>
          <div class="nav-item">
            <i class="sprite3"></i>
            <div>周边商场</div>
          </div>
          <div class="nav-item">
            <i class="sprite4"></i>
            <div>体验服</div>
          </div>
          <div class="nav-item">
            <i class="sprite5"></i>
            <div>新人专区</div>
          </div>
          <div class="nav-item">
            <i class="sprite6"></i>
            <div>荣耀|传承</div>
          </div>
          <div class="nav-item">
            <i class="sprite7"></i>
            <div>同人社区</div>
          </div>
          <div class="nav-item">
            <i class="sprite8"></i>
            <div>王者营地</div>
          </div>
          <div class="nav-item">
            <i class="sprite9"></i>
            <div>公众号</div>
          </div>
          <div class="nav-item">
            <i class="sprite10"></i>
            <div>版本介绍</div>
          </div>
      
        <div class="nav-up">
            <i class="sprite11"></i>
            <div>收起</div>
        </div>
      </div>
     </div>

    <!-- 内容区域 -->
    <m-ListCard class="ListCard" icon="menu1" title="新闻资讯" :categories='newsCats'>
      <template #items="{category}">
         <router-link tag="div" :to='`/articles/${items._id}`' class="content" v-for="(items,i) in category.newsList" :key="i">
            <span>[{{items.title}}}]</span>
            <span style='margin:0 0.3rem'>|</span>
            <span class="content-body  text-overflow">{{items.body}}</span>
            <span style="color:grey">{{items.date|date}}</span>
          </router-link>
      </template>
    </m-ListCard>

    <m-ListCard class="ListCard" icon="card-hero" title="英雄列表" :categories='herosCats'>
      <template #items="{category}">
         <div class="flex">
           <router-link tag="div" :to='`/hero/${items._id}`' class="content hero" v-for="(items,i) in category.heroList" :key="i">
              <div style="text-align:center;margin:1rem 0.5rem 1rem 0" ><img style="width:100%" :src="items.pic" />
              {{items.name}}</div>
           </router-link>
         </div>
      </template>
    </m-ListCard>

    <m-ListCard class="ListCard" icon="menu1" title="精彩视频" :categories='newsCats'>
      <template #items="{category}">
         <div class="content" v-for="(items,i) in category.newsList" :key="i">
            <span>[{{items.title}}}]</span>
            <span style='margin:0 0.3rem'>|</span>
            <span class="content-body text-overflow">{{items.body}}</span>
            <span style="color:grey">{{items.date|date}}</span>
          </div>
      </template>
    </m-ListCard>

    <m-ListCard class="ListCard" icon="menu1" title="图文攻略" :categories='newsCats'>
      <template #items="{category}">
         <div class="content" v-for="(items,i) in category.newsList" :key="i">
            <span>[{{items.title}}}]</span>
            <span style='margin:0 0.3rem'>|</span>
            <span class="content-body text-overflow">{{items.body}}</span>
            <span style="color:grey">{{items.date|date}}</span>
          </div>
      </template>
    </m-ListCard>



    <!-- <m-card icon="menu1" title="新闻资讯">
      <div class="card-body">

        <div class="card-body-nav"> 
         <div class="nav-link active">热门</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">新闻</div>
        </div>

          <div class="card-body-nav"> 
          <div class="nav-link">公告</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">活动</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>asdadasdawdas</span>
            <span>2020.2.3</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card>
    
     <m-card icon="menu1" title="英雄列表">
      <div class="card-body">

        <div class="card-body-nav"> 
         <div class="nav-link active">热门</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">新闻</div>
        </div>

          <div class="card-body-nav"> 
          <div class="nav-link">公告</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">活动</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>asdadasdawdas</span>
            <span>2020.2.3</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card>

     <m-card icon="menu1" title="精彩视频">
      <div class="card-body">

        <div class="card-body-nav"> 
         <div class="nav-link active">热门</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">新闻</div>
        </div>

          <div class="card-body-nav"> 
          <div class="nav-link">公告</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">活动</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>asdadasdawdas</span>
            <span>2020.2.3</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card>

     <m-card icon="menu1" title="图文攻略">
      <div class="card-body">

        <div class="card-body-nav"> 
         <div class="nav-link active">热门</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">新闻</div>
        </div>

          <div class="card-body-nav"> 
          <div class="nav-link">公告</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">活动</div>
        </div>

        <div class="card-body-nav"> 
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div v-for="n in 5" :key="n">
            <span>[新闻]</span>
            <span>|</span>
            <span>asdadasdawdas</span>
            <span>2020.2.3</span>
          </div>
        </swiper-slide>
      </swiper>
    </m-card> -->

    

  </div>
</template>
<script>


import dayjs from 'dayjs'
export default {
  name: 'Home',
  filters:{
    date(val){
      return dayjs(val).format('MM/DD/');
    }
  },
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        },
        newsCats:[],
        herosCats:[]
    }
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('news/list');
      this.newsCats = res.data;
    },
     async fetchHeroCats(){
      const res = await this.$http.get('heros/list');
      this.herosCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats()
  },
}
</script>
<style>
*{
  box-sizing:border-box;
}
.home{
  background-color: #eeeeee;
  height: 1000px;
}
.nav-home{
  background-color: #fff;
  border: 1px solid #fff;
}
.nav-icons{
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}
.nav-item{
  width: 25%;
  text-align: center;
  border-right: 1px solid #ccc;
  margin-top: 1rem;
  font-size: 0.9375rem;
}
.nav-up{
  width: 100%;
  height: 1.5rem;
  background: linear-gradient(to top,#eee 0%,#fff 100%);
  display: flex;
  align-items: center;
 justify-content: center;
}

.card{
  margin-top: 0.5rem;
  background-color: #fff;
  padding: 0 5px;
}
.card-header{
  display: flex;
  height: 2.5rem;
  line-height: 2.5rem;
  border-bottom: 1px solid #ddd;
}
.card-body{
  display: flex;
  height: 2.5rem;
  line-height: 2.5rem;
}
.card-body-nav{
  flex: 1 1;
  text-align: center;
}

.iconfont{
  font-size: 1.5rem;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 
.sprite1 {
	  background: url(../images/index.png) no-repeat -14rem -4.1875rem;
	  background-size: 23.4375rem 28.4375rem;
    display: inline-block;
    width: 1.4375rem;
    height: 1.25rem;
}
.sprite2 {
	  background: url(../images/index.png) no-repeat -19.875rem -4.25rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.4375rem;
	height: 1.25rem;
}
.sprite3 {
	  background: url(../images/index.png) no-repeat -8.1875rem -0.25rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.1875rem;
	height: 1.375rem;
}
.sprite4 {
	  background: url(../images/index.png) no-repeat -2.3125rem -4.1875rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.25rem;
	height: 1.25rem;
}
.sprite5 {
	  background: url(../images/index.png) no-repeat -19.9375rem -0.3125rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.25rem;
	height: 1.3125rem;
}
.sprite6 {
	  background: url(../images/index.png) no-repeat -8rem -4.125rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.5rem;
	height: 1.25rem;
}
.sprite7 {
	 	background: url(../images/index.png) no-repeat -2.125rem -0.3125rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.625rem;
	height: 1.3125rem;
}
.sprite8 {
	  background: url(../images/index.png) no-repeat -13.875rem -0.25rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
}
.sprite9 {
	background: url(../images/index.png) no-repeat 0 -26.125rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.5rem;
	height: 1.25rem;
}
.sprite10 {
background: url(../images/index.png) no-repeat -19.875rem -4.25rem;
	background-size: 23.4375rem 28.4375rem;
  display: inline-block;
	width: 1.4375rem;
	height: 1.25rem;
}

.sprite11 {
background: url(../images/index.png) no-repeat -8.8125rem -14.5rem;
		background-size: 23.4375rem 28.4375rem;
	width: 0.625rem;
	height: 0.625rem;
  display: inline-block;
 margin-right: 0.5rem;
}
.active{
  border-bottom: 2px solid orange;
  color: orange;
}
.content{
  display: flex;
 margin:0.8rem 0.5rem;
}
.flex{
  display: flex;
  flex-wrap: wrap;
  justify-content:left
}
.content-body{
  flex: 1 1;
}
.text-overflow{
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 0.5rem;
}
.hero{
  width: 20%;
}
img{
  width: 100%;
  height: 100%;
}
.ListCard{
  margin-top: 0.5rem;
}
</style>