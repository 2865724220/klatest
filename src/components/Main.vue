<template>
    <div class="wrap">
        <div class="circle">
            <div :class=" subShow ?'firstS firstSOpen':'firstS '">
                <div v-for = "(item,index) in subCom" :key="index" class="title" :style = "{top:topT(index,subCom.length),left:leftT(index,subCom.length)}" @click="subR(subCom[index])">{{item.companyShortName}}</div>
                <!--<div class="title" style="left:calc(74.7487% - 30px);top:calc(25.13% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(85% - 30px);top:calc(50% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(74.787% - 30px);top:calc(74.784% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(50% - 30px);top:calc(85% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(25.13% - 30px);top:calc(74.787% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(15% - 30px);top:calc(50% - 30px)">长航油运02</div>-->
                <!--<div class="title" style="left:calc(25.2513% - 30px);top:calc(25.2513% - 30px)">长航油运02</div>-->
            </div>
            <div class="first" @click="circle()">
                <span class="firstT">{{mainName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import $axios from './common/httpConfig'

    export default {
        name: 'Main',
        data (){
            return {
                mainName:'',
                subCom:[],
                subShow:true,
                fundId:this.$route.query.fundId,

            }
        },
        components: {
            // HelloWorld
        },
        mounted () {
            // if(this.fundId === '000001'){
            //     this.mainName = '长航油运'
            //     this.subCom = ['中国石化','中国石化','中国石化','中国石化','中国石化','中国石化','中国石化','中国石化']
            // }else{
            //     this.mainName = '平安银行'
            //     this.subCom = ['长航油运','长航油运02','长航油运','长航油运','长航油运','长航油运02','长航油运']
            // }
            $axios.post('F217',{
                "orgId": "310001",
                "reqChl": "03",
                "reqTime": "20190116165741169",
                "serNum": "1234567890",
                "sign": "SHA256withRSA2048",
                "stockCode": "000001",
                "token": "D688D2555ED94C7285D26BDF4B13D08F",
                "tranCode": "F217",
                "version": "100"
            }).then((res) => {
                this.mainName = res.companyShortName
                this.subCom = res.subsidiaryDetailList
            })
        },
        methods: {
            circle(){
                this.subShow = !this.subShow
            },
            subR(subCom){
                this.$router.push({path:'sub',name:'sub',params:{subCom:subCom}})
            },
            topT(index,length){
                return (50 + 35*Math.sin(-0.5*Math.PI - 2*(1/length)*index*Math.PI)).toFixed(4)+'%'
            },
            leftT(index,length){
                let left = (50 - 35*Math.cos(-0.5*Math.PI - 2*(1/length)*index*Math.PI)).toFixed(4)+'%'
                return left
            }
        }

    }
</script>

<style scoped>
    .circle{
        position:relative;
        width:250px;
        height:250px;
        margin:0 auto;
    }
    .first{
        display: flex;
        width:80px;
        height: 80px;
        align-items: center;
        /*background: #efefef;*/
        border-radius:100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin:auto;
        color: #fff;
        background: linear-gradient(to bottom, #ff6600, #f3975a);
    }
    .firstT{
        display: block;
        width: 80px;
        font-size: 12px;
        text-align: center;
    }
    .firstS{
        width:250px;
        height:250px;
        position: relative;
        opacity:0;
        transition: all 0.5s ease-in-out;
    }
    .firstS.firstSOpen{
        opacity: 1;
        transition: all 0.6s ease-in-out;
    }
    .firstS .title{
        display: block;
        width:60px;
        height:60px;
        /*background: #e8f7f7;*/
        border-radius:100%;
        text-align:center;
        line-height: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        background: linear-gradient(to bottom, #e8f7f7, #bfe8e8);
        margin-left:-30px;
        margin-top:-30px;
        /*margin-bottom:20px;*/
    }
</style>