<template>
    <div>
        <h1>创建分类</h1>
         <el-table :data="items" label-width="120px">
        <el-table-column prop="_id" label="ID" width="220"></el-table-column>
        <el-table-column prop="username" label="用户名" width="120">
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/categories/adminuser/${scope.row._id}`)">编辑</el-button>
         <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>

      </el-table>
    </div>
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
            const res = await this.$http.get('rest/adminUser');
            this.items = res.data;
        },
        
        async remove(row){
        this.$confirm(`是否确定要删除"${row.username}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            const res = await this.$http.delete(`rest/adminUser/${row._id}`)
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