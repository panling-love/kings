<template>
    <el-main>
        <h1>装备分类</h1>
         <el-table :data="items" label-width="120px">
        <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
        <el-table-column prop="name" label="装备名称" width="200">
        </el-table-column>
         <el-table-column prop="pic" label="装备图片" width="200">
           <template slot-scope="scope">
             <img :src="scope.row.pic" style="height:3rem">
           </template>
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/categories/tool/${scope.row._id}`)">编辑</el-button>
         <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            items:[]
        }
    },
    methods: {
        async fetch(){
            const res = await this.$http.get('rest/tools');
            this.items = res.data;
        },
        
        async remove(row){
        this.$confirm(`是否确定要删除"${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            const res = await this.$http.delete(`rest/tools/${row._id}`)
            this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.fetch();
          })
          .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
          })
        }
    },
    created() {
        this.fetch();
    },
}
</script>