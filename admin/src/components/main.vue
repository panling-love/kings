<template>
    <el-container style="height:100%">
  <el-aside width="200px"  style="background-color: rgb(238, 241, 246)">
    <el-menu router unique-opened default-active='$route.path'><!-- :default-openeds="['1']" 默认展开那些子选项卡 -->
      
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>分组管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>装备管理</template>
        <el-menu-item-group>
          <template slot="title">装备</template>
          <el-menu-item index="/categories/tool">新建装备</el-menu-item>
          <el-menu-item index="/categories/toolList">装备列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>英雄管理</template>
        <el-menu-item-group>
          <template slot="title">英雄</template>
          <el-menu-item index="/categories/hero">新建英雄</el-menu-item>
          <el-menu-item index="/categories/heroList">英雄列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>文章管理</template>
        <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="/categories/articles">新建文章</el-menu-item>
          <el-menu-item index="/categories/articlesList">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>广告管理</template>
        <el-menu-item-group>
          <template slot="title">广告</template>
          <el-menu-item index="/categories/ad">新建广告</el-menu-item>
          <el-menu-item index="/categories/adList">广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="6">
        <template slot="title"><i class="el-icon-message"></i>管理员管理</template>
        <el-menu-item-group>
          <template slot="title">管理员</template>
          <el-menu-item index="/categories/adminuser">新建管理员</el-menu-item>
          <el-menu-item index="/categories/adminuserList">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>秦宇豪</span>
    </el-header>
    
    <el-main>
        <router-view :key="$route.path">
          <categoriesList></categoriesList>
        </router-view>

    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
import categoriesList from './categoriesList.vue'

  export default {
     data() {
      return {
      }
    }
  };
</script>
