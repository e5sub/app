(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2290ce"],{dc92:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t._self._c;return e("div")},u=[],n=(o("d3b7"),o("25f0"),{created:function(){var t=this;console.log("route:",this.$route.query);var e=this.$loading({lock:!0,text:"正在加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$route.query&&this.$route.query.tk?this.$store.dispatch("user/oaLogin",this.$route.query.tk).then((function(){e.close(),t.$route.query.toPath?t.$router.push({path:t.$route.query.toPath}):t.$router.push({path:"/purchase/apply/page"})})).catch((function(o){e.close(),t.$message.warning(o.toString())})):(e.close(),this.$router.push({path:"/login"}))}}),s=n,i=o("2877"),a=Object(i["a"])(s,r,u,!1,null,null,null);e["default"]=a.exports}}]);