<template>
     <div v-if="heroList">
        <div class="topbar">
           <img src="../images/logo.png" />
           <div  style="flex:1">
             <span class="header">王者荣耀</span>
             <span class="header">攻略战</span>
           </div>
           <div>
            <router-link tag="div" style="color:white;margin-right:1rem" to="/">更多英雄 &gt;</router-link>
           </div>
        </div>

        <div v-if="heroList" class="banner-body" :style="{'background-image':`url(${heroList.banner})`}">
            <div class="banner-info">
                <div>{{heroList.title}}</div>
                <div style="font-size:1.3rem;color:#fff">{{heroList.name}}</div>
                <div >{{heroList.categories.map(v=>v.name).join('/')}}</div>
                <div class="scores">
                    <div>
                        <span>难度</span>
                        <span class="circle">{{heroList.scores.difficult}}</span>
                    </div>
                    <div>
                        <span>技能</span>
                        <span class="circle">{{heroList.scores.skills}}</span>
                    </div>
                    <div>
                        <span>攻击</span>
                        <span class="circle">{{heroList.scores.attack}}</span>
                    </div>
                    <div>
                        <span>生存</span>
                        <span class="circle">{{heroList.scores.survive}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="body">
            <div class="body-box">
                <div class="nav">
                    <div class="activeHero">
                        <div>英雄初始</div>
                    </div>
                    <div> 
                        <div>进阶攻略</div>
                    </div>
                </div>
            </div>
            <swiper >
                <swiper-slide>
                    <div>
                        <div class="nav-box">
                            <router-link tag="button" to='/' class="btn-nav">
                            <i class="iconfont icon-card-hero"></i>
                            英雄介绍视频
                            </router-link>
                            <router-link tag="button" to='/' class="btn-nav">
                            <i class="iconfont icon-card-hero"></i>
                            一图识英雄
                            </router-link>
                        </div>
                        
                       <div >
                            <div class="skills">
                            <img  :src="skill.pic" v-for="(skill,i) in heroList.skills" :key="i" :class="{activeSkill:curSkillIndex===i}" @click="curSkillIndex=i" />
                            </div>
                            <div v-if="curcurSkill">
                                <div class="skill-title">
                                    <h3>{{curcurSkill.name}}</h3>
                                    <span class="cost">(冷却值:{{curcurSkill.delay}}消耗:{{curcurSkill.cost}})</span>
                                </div>
                                <div class="skill-body">
                                    <p style="margin-bottom:1rem">{{curcurSkill.description}}</p>
                                    <div style="border-bottom:1px grey solid"></div>
                                    <p style="margin-top:1rem;color:grey">小提示: {{curcurSkill.tips}}</p>
                                </div>
                            </div>
                       </div>

                       <div class="tool skill-body" >
                           <h2>
                            <i class="iconfont icon-card-hero"></i>
                            出装推荐
                            </h2>
                          <div class="toolTop">
                                <h3>顺风出装</h3>
                                <div class="goodTool1" >
                                    <div v-for="(toolGood,i) in heroList.items1" :key="i">
                                        <div class="goodTool"><img :src="toolGood.pic" />
                                        <div>{{toolGood.name}}</div></div>
                                    </div>
                                </div>
                          </div>
                          <div class="toolTop">
                                <h3>逆风出装</h3>
                                <div class="goodTool1" >
                                    <div v-for="(toolGood,i) in heroList.items2" :key="i">
                                        <div class="goodTool"><img :src="toolGood.pic" />
                                        <div>{{toolGood.name}}</div></div>
                                    </div>
                                </div>
                          </div>
                       </div>

                       <div class="tool skill-body" >
                           <h2>
                            <i class="iconfont icon-card-hero"></i>
                            使用技巧
                            </h2>
                           <p style="margin-top:1rem">{{heroList.usageTips}}</p>
                       </div>

                       <div class="tool skill-body" >
                           <h2>
                            <i class="iconfont icon-card-hero"></i>
                            对抗技巧
                            </h2>
                           <p style="margin-top:1rem">{{heroList.battleTips}}</p>
                       </div>

                       <div class="tool skill-body" >
                           <h2>
                            <i class="iconfont icon-card-hero"></i>
                            团战思路
                            </h2>
                           <p style="margin-top:1rem">{{heroList.teamTips}}</p>
                       </div>

                       <div class="tool skill-body" >
                           <h2>
                            <i class="iconfont icon-card-hero"></i>
                            英雄关系
                            </h2>
                            <h3 style="margin:1rem 0">最佳搭档</h3>
                           <div v-for="(partner,i) in heroList.partners" :key="i">
                               <div class="partner">
                                   <img  :src="partner.hero.pic" />
                                   <p style="margin-left:1rem">{{partner.description}}</p>
                               </div>
                           </div>
                       </div>
                    </div>
                </swiper-slide>
                <swiper-slide>

                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{required:true}
    },
    data() {
        return {
            heroList:{
                scores:{},
                categories:[],
                skills:[]
            },
            curSkillIndex:0
        }
    },
    computed: {
        curcurSkill(){
            return this.heroList.skills[this.curSkillIndex];
        }
    },
    methods: {
        async fetchHeroList(){
            const res = await this.$http.get(`/heros/${this.id}`);
            this.heroList = res.data;
        }
    },
    created() {
        this.id&&this.fetchHeroList();
    },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.topbar{
  background-color: black;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  color :white;
  /* 以下实现吸顶效果 */
  position: sticky;
  top: 0;
  z-index: 999;
}
.topbar>img{
  width: 3rem;
  height: 3rem;
  line-height: 30px;
  margin-left: 0.5rem;
}

.header{
    display: inline-block;
    font-size:1rem;
    margin-left: 0.5rem;
}
.banner-body{
   background: #fff no-repeat top center;
   height: 13rem;
   background-size: 100% auto;
   position: relative;

   
}
.banner-info{
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    color: #eee;
}

.scores{
    display: flex;
}
.circle{
    display:inline-block;
    background-color:orange;
    width:1rem;
    height:1rem;
    text-align: center;
    line-height: 1rem;
    border-radius:50%
}
.nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    padding: 0.5rem 0;
    border-bottom: #ccc 3px solid;
}
.body-box{
    padding:0 1rem;
    background-color: white;
}
.nav-box{
    display: flex;
    padding: 0 1rem;
    margin-top: 0.5rem;
}
.btn-nav{
    flex: 1;
    height: 2rem;
}
.skills{
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.skills>img{
    width: 15%;
    margin-top: 1.5rem;
}
.skill-title{
    display: flex;
    margin-top: 1rem;
    padding: 0 1rem;
    justify-items: center;
    align-items: center;
}

.cost{
    margin-left: 1rem;
    font-size: 0.8rem;
}
.skill-body{
    padding: 0 1rem;
    margin: 1rem 0;
}
.tool{
    padding: 0 1rem;
    margin-top: 2rem;
}
.toolTop{
    margin: 1rem 0;
}
.goodTool1{
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;
}
.goodTool{
    text-align: center;
}
.goodTool>img{
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
}
.partner{
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    margin-top:1rem
}
.partner>img{
    width: 5rem;
    height: 5rem;
}
.activeHero{
    color: orange;
    border-bottom: orange 3px solid;
}
.activeSkill{
    border-radius: 50%;
    border: 2px orange solid;
}
</style>