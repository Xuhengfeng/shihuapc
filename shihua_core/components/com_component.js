/***** 公共组件 ****/
  
/*
 *@ desc: 查询输入文本框组件
 *@ author：Xuhengfeng 2018-07-03
 *  使用例子： <xhf-header :vdata="cpmQueryData" @btnqueryclick="btnqueryclick"></xhf-header> 
 **/
Vue.component('xhf-header', {
    props: ['vdata'],
    template: '<div class="header">'
        +'<div class="container">'
            +'<div class="logo fl">'
                +'<img src="../../imgs/buyhouse/logored.png" />'
            +'</div>'
            +'<div class="searchBox fl"  v-show="vdata.isShowQueryBox">'
                +'<input ref="oInput" type="text" :placeholder="vdata.placeholder" v-model="vdata.txtval"  @keyup.enter="btnqueryclick()"/>'
                +'<div @btnqueryclick="query()"></div>'
            +'</div>'
            +'<div class="menu fr" v-show="vdata.isMapSearch">'
                +'<ul class="menuright fl" @click="mapSearch()">'
                    +'<li><img src="../../imgs/buyhouse/diwei.png" /></li>'
                    +'<li class="mapSearchHouse">地图找房</li>'
                +'</ul>'
            +'</div>'
            +'</div>'
        +'</div>'
    ,
    methods: {
        btnqueryclick:function(event){
            this.$emit('btnqueryclick');
        }
    }
});
  