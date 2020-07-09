<template>
    <m-card :icon="icon" :title="title">
      <div class="card-body">

        <div class="card-body-nav" v-for="(categories,i) in categories" :key="i"> 
         <div class="nav-link" :class="{active:active===i}" @click="$refs.list.swiper.slideTo(i)">{{categories.name}}</div>
        </div>

      </div>
      <swiper :options='{autoHeight:true}' ref="list" @slide-change="() => active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(categories,i) in categories" :key="i">
         <slot name="items" :category='categories'></slot>
        </swiper-slide>
      </swiper>
    </m-card>
</template>
<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        categories:{type:Array,required:true},
    },
    data() {
        return {
            active:0
        }
    },
}
</script>