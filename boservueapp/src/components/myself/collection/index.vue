<template>
    <div class="all collection">
        <div class="header collection-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content collection-content">
            <div class="collection-content-child" v-for="(collection,index) in collectionData" :key="index">
                <div class="collection-content-child-top" @touchend="handleOpen(index)">
                    <div>{{collection.name}}</div>
                    <div class="collection-content-back"></div>
                </div>
                <div class="collection-content-child-bottom" v-show="showBottom[index]">
                    <div
                        class="collection-bottom-child"
                        v-for="(child,cindex) in collection.list"
                        :key="cindex"
                        @touchend="goToChildren(child)">
                        <div>{{child.name}}</div>
                        <div class="collection-content-back"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "collection",
        components:{
            goBackHeader
        },
        data(){
            return {
                collectionData:[
                    {
                        name:"基础",
                        list:[
                            {
                                name:'Button',
                                path:'/myself/collection/button',
                            },
                            {
                                name:'Loading',
                                path:'/myself/collection',
                            },
                            {
                                name:'Tip',
                                path:'/myself/collection',
                            },
                            {
                                name:'Toolbar',
                                path:'/myself/collection',
                            },
                        ]
                    },
                    {
                        name:"表单",
                        list:[
                            {
                                name:'Checkbox',
                                path:'/myself/collection',
                            },
                            {
                                name:'CheckboxGroup',
                                path:'/myself/collection',
                            },
                            {
                                name:'Radio',
                                path:'/myself/collection',
                            },
                            {
                                name:'Input',
                                path:'/myself/collection',
                            },
                            {
                                name:'Textarea',
                                path:'/myself/collection',
                            },
                            {
                                name:'Select',
                                path:'/myself/collection',
                            },
                            {
                                name:'Switch',
                                path:'/myself/collection',
                            },
                            {
                                name:'Rate',
                                path:'/myself/collection',
                            },
                            {
                                name:'Validator',
                                path:'/myself/collection',
                            },
                            {
                                name:'Upload',
                                path:'/myself/collection',
                            },
                            {
                                name:'Form',
                                path:'/myself/collection',
                            },
                        ]
                    },
                    {
                        name:"弹出层",
                        list:[
                            {
                                name:'Popup',
                                path:'/myself/collection',
                            },
                            {
                                name:'Toast',
                                path:'/myself/collection',
                            },
                            {
                                name:'Picker',
                                path:'/myself/collection',
                            },
                            {
                                name:'CascadePicker',
                                path:'/myself/collection',
                            },
                            {
                                name:'DatePicker',
                                path:'/myself/collection',
                            },
                            {
                                name:'TimePicker',
                                path:'/myself/collection',
                            },

                            {
                                name:'SegmentPicker',
                                path:'/myself/collection',
                            },
                            {
                                name:'Dialog',
                                path:'/myself/collection',
                            },
                            {
                                name:'ActionSheet',
                                path:'/myself/collection',
                            },
                            {
                                name:'Drawer',
                                path:'/myself/collection',
                            }
                        ]
                    },
                    {
                        name:"滚动",
                        list:[
                            {
                                name:'Scroll',
                                path:'/myself/collection',
                            },
                            {
                                name:'Slide',
                                path:'/myself/collection',
                            },
                            {
                                name:'IndexList',
                                path:'/myself/collection',
                            },
                            {
                                name:'Swipe',
                                path:'/myself/collection',
                            },
                        ]
                    },
                ],
                showBottom:[],
            }
        },
        methods:{
            handleOpen(i){
                this.showBottom.forEach((item,index,arr)=>{
                    if (i !== index){
                        arr[index] = false;
                    }else{
                        this.showBottom[i] = !this.showBottom[i];
                    }
                })
                // this.$set(this,'showBottom',this.showBottom);
                this.$set(this.showBottom,i,this.showBottom[i]);
            },
            goToChildren(item){
                this.$router.push({
                    path:item.path,
                    query:{
                        name:item.name
                    }
                })
            }
        },
        created(){
            this.collectionData.forEach(()=>{
                this.showBottom.push(false)
            })
        }
    }
</script>

<style scoped lang="less">
.collection{
    .collection-content{
        height: 94%;
        padding: 0 2%;
        width: 96%;
        .collection-content-child{
            .collection-content-child-top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #333;
                padding: 2%;
                width: 96%;
                margin: 2% 0;
                .collection-content-back{
                    width: 0.35rem;
                    height: 0.35rem;
                    border-bottom: 2px solid var(--backfriend-name);
                    border-right: 2px solid var(--backfriend-name);
                    transform: rotate(45deg);
                }
            }
            .collection-content-child-bottom{
                width: 90%;
                margin: 0 5%;
                .collection-bottom-child{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #333;
                    padding: 2%;
                    width: 96%;
                    margin: 2% 0;
                    .collection-content-back{
                        width: 0.35rem;
                        height: 0.35rem;
                        border-top: 2px solid var(--backfriend-name);
                        border-right: 2px solid var(--backfriend-name);
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }
}
</style>