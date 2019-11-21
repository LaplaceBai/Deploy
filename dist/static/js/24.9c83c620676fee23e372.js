webpackJsonp([24],{It3x:function(t,e){},wbLX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("KhLR"),n={name:"productAttrCateList",data:function(){return{list:null,total:null,listLoading:!0,listQuery:{pageNum:1,pageSize:5},dialogVisible:!1,dialogTitle:"",productAttrCate:{name:"",id:null},rules:{name:[{required:!0,message:"请输入类型名称",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(a.c)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total})},addProductAttrCate:function(){this.dialogVisible=!0,this.dialogTitle="添加类型"},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleDelete:function(t,e){var i=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.b)(e.id).then(function(t){i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()})})},handleUpdate:function(t,e){this.dialogVisible=!0,this.dialogTitle="编辑类型",this.productAttrCate.name=e.name,this.productAttrCate.id=e.id},getAttrList:function(t,e){this.$router.push({path:"/pms/productAttrList",query:{cid:e.id,cname:e.name,type:0}})},getParamList:function(t,e){this.$router.push({path:"/pms/productAttrList",query:{cid:e.id,cname:e.name,type:1}})},handleConfirm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var i=new URLSearchParams;i.append("name",e.productAttrCate.name),"添加类型"===e.dialogTitle?Object(a.a)(i).then(function(t){e.$message({message:"添加成功",type:"success",duration:1e3}),e.dialogVisible=!1,e.getList()}):Object(a.e)(e.productAttrCate.id,i).then(function(t){e.$message({message:"修改成功",type:"success",duration:1e3}),e.dialogVisible=!1,e.getList()})})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[i("i",{staticClass:"el-icon-tickets",staticStyle:{"margin-top":"5px"}}),t._v(" "),i("span",{staticStyle:{"margin-top":"5px"}},[t._v("数据列表")]),t._v(" "),i("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){t.addProductAttrCate()}}},[t._v("\n      添加\n    ")])],1),t._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productAttrCateTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"类型名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"属性数量",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(null==e.row.attributeCount?0:e.row.attributeCount))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"参数数量",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(null==e.row.paramCount?0:e.row.paramCount))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"设置",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.getAttrList(e.$index,e.row)}}},[t._v("属性列表\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.getParamList(e.$index,e.row)}}},[t._v("参数列表\n          ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.handleUpdate(e.$index,e.row)}}},[t._v("编辑\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"productAttrCatForm",attrs:{model:t.productAttrCate,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.productAttrCate.name,callback:function(e){t.$set(t.productAttrCate,"name",e)},expression:"productAttrCate.name"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleConfirm("productAttrCatForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(n,l,!1,function(t){i("It3x")},"data-v-fdc5ad70",null);e.default=r.exports}});
//# sourceMappingURL=24.9c83c620676fee23e372.js.map