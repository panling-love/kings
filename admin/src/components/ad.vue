<template>
    <div>
        <h1>{{id?'编辑':'新建'}}广告类</h1>
        <el-form label-width='120px' @submit.native.prevent="save" >
           
            <el-form-item  label="名称">
                <el-input v-model="categories.name"></el-input>
            </el-form-item>

             <el-form-item  label="广告">
                <el-button size="small" @click="categories.items.push({})" ><i class="el-icon-plus"></i>添加广告</el-button>
            </el-form-item>

            <el-tabs>

                    <el-row type='flex' style="flex-wrap:wrap">
                        <el-col :md='12' v-for="(item,i) in categories.items" :key="i">
                            <el-form-item label='跳转链接(URL)'>
                                <el-input v-model="item.url"></el-input>
                            </el-form-item>

                            <el-form-item label='图片'>
                                <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :headers='getAuthHeaders()'
                                :show-file-list="false"
                                :on-success="res=>$set(item,'pic',res.url)"
                                >
                                <img v-if="item.pic" :src="item.pic" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>

                            <el-form-item>
                                <el-button type='danger' size='small' @click="categories.items.splice(i,1)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

        

            </el-tabs>
            
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
            categories:{
                items:[]
            },
            parents:[]
        }
    },
    methods: {
        async save(){
            let res;
            if(this.id){
                res = await this.$http.put(`rest/ad/${this.id}`,this.categories);
            }else{
                res = await this.$http.post('rest/ad',this.categories);
            }
            this.$router.push('/categories/adList');
            this.$message({
                type:'success',
                message:'保存成功了'
            });
        },
        async fatch(){
            const res = await this.$http.get(`rest/ad/${this.id}`);
            // this.categories = res.data;
            this.categories = Object.assign({},this.categories,res.data);
            // console.log(this.categories)

        },

    },
    created() {
        this.id&&this.fatch();
    },
}
</script>
