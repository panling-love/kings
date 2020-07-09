<template>
    <div>
        <h1>{{id?'编辑':'新建'}}装备</h1>
        <el-form label-width='120px' @submit.native.prevent="save" >
            <el-form-item  label="名称">
                <el-input v-model="categories.name"></el-input>
            </el-form-item>
            <el-form-item  label="图片">
                <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers='getAuthHeaders()'
                :show-file-list="false"
                :on-success="uploadSuccess"
                >
                <img v-if="categories.pic" :src="categories.pic" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data() {
        return {
            categories:{},
            // parents:[]
        }
    },
    methods: {
        async save(){
            console.log(this.categories)
            let res;
            if(this.id){
                res = await this.$http.put(`rest/tools/${this.id}`,this.categories);
            }else{
                res = await this.$http.post('rest/tools',this.categories);
            }
            this.$router.push('/categories/toolList');
            this.$message({
                type:'success',
                message:'保存成功了'
            });
            this.categories = {};
        },
        async fatch(){
            const res = await this.$http.get(`rest/tools/${this.id}`);
            this.categories = res.data;
            // console.log(this.categories)
        },
        // async fatchParents(){
        //     const res = await this.$http.get(`rest/categories`);
        //     this.parents = res.data;
        // }
        async uploadSuccess(res) {
        this.$set(this.categories,'pic',res.url);//使用vue的显式赋值
        // this.categories.pic =res.url;
        // console.log(this.categories)
      },
    },
    created() {
        // this.fatchParents();
        this.id&&this.fatch();
    },
}
</script>

<style>
 
</style>
