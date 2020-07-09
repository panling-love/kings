<template>
    <div>
        <div class="topbar">
           <img src="../images/logo.png" />
           <div  style="flex:1">
             <div style="font-size:1rem">王者荣耀</div>
             <div style="font-size:0.5rem;color:#666">团队成就更多</div>
           </div>
           <div>
             <input type="button"  value="立即下载"  class="down" />
           </div>
        </div>
        <div class="nav">
          <div class="text active-Main">
            首页
          </div>
          <div class="text">
            攻略中心
          </div>
          <div class="text">
            赛事中心
          </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
     
    }
  },
}
</script>

<style scope>
*{
  margin: 0;
  padding: 0;
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
.down{
  background-color: orange;
  height: 1.5rem;
  margin-right: 10px;
}
.nav{
  margin-top: 1px;
  background-color: orange;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
}
.nav>.text{
  color: white;
}
.active-Main{
  border-bottom: 3px solid #fff;
}
</style>