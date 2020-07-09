<template>
    <div class="page-article">
        <div class="nav-article">
            <div class="iconfont icon-Back" @click="()=>this.$router.go(-1)"></div>
            <strong class="nav-body">{{items.title}}</strong>
            <div class="date">{{items.date|date}}</div>
        </div>
        <div class="article-body">
            {{items.body}}
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    
    props:{
        id:{required:true}
    },
    filters:{
        date(val){
            return dayjs(val).format('YYYY-MM-DD')
        }
    },
    data() {
        return {
            items:{}
        }
    },
    methods: {
        async fetchNews(){
            if(this.id){
                const res =await this.$http.get(`/articles/${this.id}`);
                this.items = res.data;
                console.log(this.items)
            }
        },
    },
    created() {
        this.fetchNews()
    },
}
</script>

<style>
.page-article{
    background-color: #eee;
    height: 100%;
}
.nav-article{
    display: flex;
    height: 2rem;
    justify-items: center;
    align-items: center;
    border-bottom: #ccc 1px solid;
}
.nav-body{
    flex: 1 1;
    margin-left: 0.5rem;
    color: aquamarine;
}
.icon-Back{
     color: aquamarine;
}
.date{
    font-size: 0.2rem;
    margin-right: 1rem;
}
</style>