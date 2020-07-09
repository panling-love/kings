<template>
    <div class="card">

        <div class="card-header">
            <i class="iconfont" :class="`icon-${icon}`"></i>
            <strong style="flex:1;margin-left:0.8rem;font-size:1.625rem">{{title}}</strong>
            <i class="iconfont icon-menu"></i>
        </div>
        <slot></slot>
     
    </div>
</template>

<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
    },
    data() {
        return {
            
        }
    },
}
</script>