<template>
    <div>
        <h1>{{id?'编辑':'新建'}}分类</h1>
        <el-form label-width='120px' @submit.native.prevent="save" >
            <el-form-item  label="上级分类">
                <el-select  filterable multiple v-model="categories.parent">
                    <el-option  v-for="item in parents" :key="item._id"
                    :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item  label="标题">
                <el-input v-model="categories.title"></el-input>
            </el-form-item>

            <el-form-item label="详情">
                <vue-editor v-model="categories.body" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
            </el-form-item>

            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    props:{
        id:{}
    },
    data() {
        return {
            categories:{},
            parents:[]
        }
    },
    components: {
    VueEditor
  },
    methods: {
         async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await this.$http.post("upload", formData);
            Editor.insertEmbed(cursorLocation, "image", res.data.url);
            resetUploader();
            },
        async save(){
            let res;
            let date = new Date();
            this.categories.date = date;
            if(this.id){
                res = await this.$http.put(`rest/articles/${this.id}`,this.categories);
            }else{
                res = await this.$http.post('rest/articles',this.categories);
                console.log(this.categories)
            }
            this.$router.push('/categories/articlesList');
            this.$message({
                type:'success',
                message:'保存成功了'
            });
        },
        async fatch(){
            const res = await this.$http.get(`rest/articles/${this.id}`);
            this.categories = res.data;

        },
        async fatchParents(){
            const res = await this.$http.get(`rest/categories`);
            this.parents = res.data;
        },
      
    },
    created() {
        this.fatchParents();
        this.id&&this.fatch();
    },
}
</script>