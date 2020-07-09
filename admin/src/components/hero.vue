<template>
    <div>
        <h1>{{id?'编辑':'新建'}}英雄</h1>
        <el-form label-width='120px' @submit.native.prevent="save" >
            
           <el-tabs value="basic" type="border-card">
               <el-tab-pane label="基本信息" name="basic">
                    <el-form-item  label="名称">
                        <el-input v-model="categories.name"></el-input>
                    </el-form-item>

                    <el-form-item  label="称号">
                        <el-input v-model="categories.title"></el-input>
                    </el-form-item>

                    <el-form-item  label="类型">
                        <el-select  multiple filterable v-model="categories.categories">
                            <el-option  v-for="item in parents" :key="item._id"
                            :label="item.name" :value="item._id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item  label="难度">
                        <el-rate :max='9' show-score v-model="categories.scores.difficult" ></el-rate>
                    </el-form-item>

                    <el-form-item  label="技能">
                        <el-rate :max='9' show-score v-model="categories.scores.skills" ></el-rate>
                    </el-form-item>

                    <el-form-item  label="攻击">
                        <el-rate :max='9' show-score v-model="categories.scores.attack" ></el-rate>
                    </el-form-item>

                    <el-form-item  label="生存">
                        <el-rate :max='9' show-score v-model="categories.scores.survive" ></el-rate>
                    </el-form-item>

                    <el-form-item  label="顺风出装">
                        <el-select  multiple  v-model="categories.items1">
                            <el-option  v-for="item in items" :key="item._id"
                            :label="item.name" :value="item._id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item  label="逆风出装">
                        <el-select  multiple  v-model="categories.items2">
                            <el-option  v-for="item in items" :key="item._id"
                            :label="item.name" :value="item._id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item  label="英雄头像">
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :headers='getAuthHeaders()'
                        :show-file-list="false"
                        :on-success="res=>$set(categories,'pic',res.url)"
                        >
                        <img v-if="categories.pic" :src="categories.pic" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item  label="Banner">
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :headers='getAuthHeaders()'
                        :show-file-list="false"
                        :on-success="res=>$set(categories,'banner',res.url)"
                        >
                        <img v-if="categories.banner" :src="categories.banner" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item  label="使用技巧">
                        <el-input type="textarea" v-model="categories.usageTips"></el-input>
                    </el-form-item>

                    <el-form-item  label="对抗技巧">
                        <el-input type="textarea" v-model="categories.battleTips"></el-input>
                    </el-form-item>

                    <el-form-item  label="团战思路">
                        <el-input type="textarea" v-model="categories.teamTips"></el-input>
                    </el-form-item>
               </el-tab-pane>

                <el-tab-pane label="技能" name='skills'>
                    <el-button size="small" @click="categories.skills.push({})" ><i class="el-icon-plus"></i>添加技能</el-button>

                    <el-row type='flex' style="flex-wrap:wrap">
                        <el-col :md='12' v-for="(item,i) in categories.skills" :key="i">
                            <el-form-item label='名称'>
                                <el-input v-model="item.name"></el-input>
                            </el-form-item>

                            <el-form-item label='技能图标'>
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

                            <el-form-item label='冷却值'>
                                <el-input type='text' v-model="item.delay"></el-input>
                            </el-form-item>

                            <el-form-item label='消耗'>
                                <el-input type='text' v-model="item.cost"></el-input>
                            </el-form-item>

                            <el-form-item label='描述'>
                                <el-input type='textarea' v-model="item.description"></el-input>
                            </el-form-item>

                            <el-form-item label='小提示'>
                                <el-input type='textarea' v-model="item.tips"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type='danger' size='small' @click="categories.skills.splice(i,1)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-tab-pane>

                <el-tab-pane label="最佳搭档" name='partner'>
                    <el-button size="small" @click="categories.partners.push({})" ><i class="el-icon-plus"></i>添加英雄</el-button>

                    <el-row type='flex' style="flex-wrap:wrap">
                        <el-col :md='12' v-for="(item,i) in categories.partners" :key="i">
                            <el-form-item label='英雄'>
                                <el-select filterable multiple v-model="item.hero">
                                    <el-option v-for="hero in heros" :key="hero._id" :value='hero._id' :label='hero.name'></el-option>
                                </el-select>
                            </el-form-item>


                            <el-form-item label='描述'>
                                <el-input type='textarea' v-model="item.description"></el-input>
                            </el-form-item>

                           
                            <el-form-item>
                                <el-button type='danger' size='small' @click="categories.skills.splice(i,1)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-tab-pane>

           </el-tabs>

            <el-form-item style="margin-top:1rem" >
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
                scores:{},
                partners:[],
                skills:[{}]
            },
            parents:[],
            items:[],
            heros:[]
        }
    },
    methods: {
        async save(){
            let res;
            if(this.id){
                res = await this.$http.put(`rest/hero/${this.id}`,this.categories);
            }else{
                res = await this.$http.post('rest/hero',this.categories);
                console.log(this.categories)
            }
            this.$router.push('/categories/heroList');
            this.$message({
                type:'success',
                message:'保存成功了'
            });
        },
        async fatch(){
            const res = await this.$http.get(`rest/hero/${this.id}`);
            this.categories = Object.assign({},this.categories,res.data);
        },
        async fatchParents(){
            const res = await this.$http.get(`rest/categories`);
            this.parents = res.data;
            // console.log(this.parents)
        },
        async fatchItems(){
            const res = await this.$http.get(`rest/tools`);
            this.items = res.data;
            // console.log(this.items)
        },
        async fatchHeros(){
            const res = await this.$http.get(`rest/heros`);
            this.heros = res.data;
            console.log(this.heros)
        }
    },
    created() {
        this.fatchParents();
        this.fatchHeros();
        this.fatchItems();
        this.id&&this.fatch();
    },
}
</script>

<style>
 
</style>