/*移动端RESET*/
html { font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%; }
body { margin: 0;
    font-size: 1.4rem;
    line-height: 1.5;
    color: #333333;
    background-color: white;
    height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch; }
em{ font-style:normal;}
article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary { display: block; }
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline; }
audio:not([controls]) { display: none; height: 0; }
[hidden], template { display: none; }
svg:not(:root) { overflow: hidden; }

a { border:0; background: transparent; text-decoration: none; -webkit-tap-highlight-color: transparent; color: #0088cc; }
a:hover{ text-decoration: none;}
a:active { outline: 0; }
a:active { color: #006699; }
a:visited{ border:0;}
abbr[title] { border-bottom: 1px dotted; }
b, strong { font-weight: bold; }
dfn { font-style: italic; }
mark { background: #ff0; color: #000; }
small { font-size: 80%; }
sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
sup { top: -0.5em; }
sub { bottom: -0.25em; }
img { border: 0; vertical-align: middle; }
hr { -moz-box-sizing: content-box; box-sizing: content-box; height: 0; }
pre { overflow: auto; white-space: pre; white-space: pre-wrap; word-wrap: break-word; }
code, kbd, pre, samp { font-family: monospace, monospace; font-size: 1em; }

button, input, optgroup, select, textarea { color: inherit; font: inherit; margin: 0; }
button { overflow: visible; }
button, select { text-transform: none; }
button, html input[type="button"], input[type="reset"], input[type="submit"] { -webkit-appearance: button; cursor: pointer; }
button[disabled], html input[disabled] { cursor: default; }
button::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0; }
input { line-height: normal; }
input[type="checkbox"], input[type="radio"] { box-sizing: border-box; padding: 0; }
input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { height: auto; }
input[type="search"] { -webkit-appearance: textfield; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }
input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { -webkit-appearance: none; }
fieldset { border: 1px solid #c0c0c0; margin: 0 2px; padding: 0.35em 0.625em 0.75em; }
legend { border: 0; padding: 0; }
textarea { overflow: auto; resize: vertical; }
optgroup { font-weight: bold; }

table { border-collapse: collapse; border-spacing: 0; }
td, th { padding: 0; }

html, button, input, select, textarea { font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif; }
h1, h2, h3, h4, h5, h6, p, figure, form, blockquote { margin: 0; }
ul, ol, li, dl, dd { margin: 0; padding: 0; }
ul, ol { list-style: none outside none; }
h1, h2, h3 { line-height: 2; font-weight: normal; }
h1 { font-size: 1.8rem; }
h2 { font-size: 1.6rem; }
h3 { font-size: 1.4rem; }
input{ vertical-align:middle;}
input::-moz-placeholder, textarea::-moz-placeholder { color: #cccccc; }
input:-ms-input-placeholder, textarea:-ms-input-placeholder { color: #cccccc; }
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #cccccc; }

* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
/* 移动端RESET结束*/

.site-underconstruction {
	padding: 80px 20px 400px;
	background: #fff;
	text-align: center;
}

#loading-content{
    display: none;
}
/*页面加载loading*/
.page-start-loading{
    width: 160px;
    height: 160px;
    background:none;
    position:absolute;
    margin-left:-80px;
    margin-top: -80px;
    top:50%;
    left: 50%;
    display:block;
    background: url("../image/network/loading.gif") center center no-repeat;
    z-index: 2;
}
.page-start-loading *{display: none}
/*页面加载loading结束*/

#js_page-ajax-tab{
    text-align: center; width: 100%;
    line-height: 3rem;
}
#js_page-ajax-tab span{
    display: block;
}

.red-box{ border-top:1px solid #f00; border-bottom:1px solid #f00;}

.form-subimt-btn {
    background: #fff none repeat scroll 0 0;
    border-top: 1px solid #dcdcdc;
    padding: 10px 0;
    text-align: center;
    width: 100%;
}
body .form-subimt-btn a {
    background-color: #1bc5b2;
    border-radius: 0.4rem;
    color: white;
    display: inline-block;
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    width: 90%;
}

/**合并liushihong**/
.left{
    float: left;
}
.right{
    float: right;
}

.fl{ float:left;}

.fr{ float:right;}
.clear{
    clear: both;
}
.txt-left{
    text-align: left;
}
.txt-center{
    text-align:center;
}
.txt-right{
    text-align:right;
}
.color-999-size{
    color: #999;
    font-size: 1.4rem;
    line-height: 2.5rem;
}
.max-width{
    max-width: 72rem;
    margin: 0 auto;
    border: 1px solid #dcdcdc;
}
/* 清理浮动 */
.clearfix:after {
    visibility:hidden;
    display:block;
    font-size:0;
    content:" ";
    clear:both;
    height:0;
}
.clearfix {
    zoom:1;
}

.container-fluid {
    /*padding-right: 1.5rem;
    padding-left: 1.5rem;*/
    margin-right: auto;
    margin-left: auto;
    width: 92%;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    position: relative;
    min-height: 1px;
    float: left;
}

.col-xs-12 {
    width: 100%;
}
.col-xs-11 {
    width: 91.66666667%;
}
.col-xs-10 {
    width: 83.33333333%;
}
.col-xs-9 {
    width: 75%;
}
.col-xs-8 {
    width: 66.66666667%;
}
.col-xs-7 {
    width: 58.33333333%;
}
.col-xs-6 {
    width: 50%;
}
.col-xs-5 {
    width: 41.66666667%;
}
.col-xs-4 {
    width: 33.33333333%;
}
.col-xs-3 {
    width: 25%;
}
.col-xs-2 {
    width: 16.66666667%;
}
.col-xs-1 {
    width: 8.33333333%;
}
.col-xs-20 {
    width: 20%;
}
.no-right-border{
    border-right: none !important;
}
.body_bgcolor{
    background: #f0eff3;
}

.s-item{ display:block;  border:none;}

#window-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    left:0;
    position:fixed;
    top:0;
    z-index:4998;
    width:100%;
    height:100%;
    opacity:0.5;
    display:none;
}
#window-overlay-content{
    width: 100%;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index:4999;
}
.work-wrap-bgcolor{
    width: 100%;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    background:#fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index:4999;
}
.work-wrap-list li{
    height: 5rem;
    line-height: 5rem;
    position: relative;
    color: #666;
    font-size: 1.6rem;
    cursor: pointer;
}
.work-wrap-list li a{ color:#666;}
.work-wrap-list li a:hover{ color:#1bc5b2;}
.work-wrap-list li.active{
    color: #1bc5b2;
}
.work-wrap-list li.active a{ color:#1bc5b2;}
.hide{
    display: none;
}
.show{
    display: block;
}
.whole-bottom-line{
    height: 1px;
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
}
.bottom-border-line{
    height: 1px;
    width: 95.5%;
    border-bottom: 1px solid #e3e3e3;
    position: absolute;
    bottom: 0;
    left: 1.5rem;
}

/**
 * Created by liushihong on 2015/10/7.
 *错误提示信息样式 表单
 */
.error-red-border{
    border: 1px solid #f46868 !important;
    position: relative;
}
.infor-error-wrap{
    padding: 1rem;
    background-color: #000;
    opacity:0.5;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    position: absolute;
    bottom: -3.4rem;
    left: 33%;
    z-index: 2;
}
.infor-error-arrow{
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.5rem solid #000;
    position: absolute;
    top: -14px;
    left: 1rem;
}
.infor-wrap-content{
    font-size: 1.5rem;
    color: #fff;
}

/***日志*****/
.site .up-msg{
 padding:4%;
}
.site .up-msg .up-msg-left{
    position: absolute;
    width: 8%;
    min-height: 50px;
}
.site .up-msg .up-msg-left .m-d
{
    width: 16px;
    height: 16px;
    background-color: #bbbbbb;
    border-radius: 20px;
}
.site .up-msg .up-msg-left .m-y{
    width: 3px;
    height: 40px;
    background-color: #bbbbbb;
    position: relative;
    left: 6px;
    margin-top: 1px;
    margin-bottom: 1px;
}
.site .up-msg .up-msg-c
{
    display: inline-block;
    margin-left: 10%;
}
.site .up-msg .up-msg-c ul{
    font-size: 14px;
}
.site .up-msg .up-msg-c ul li{
    height: 55px;
	color:#999999;
}

/****liushihong新增日志样式 2015-12-30****/
.site-log-wrap dd{
    height: auto;
    color:#999;
    border-left: 2px solid #bbb;
    position: relative;
    padding-bottom: 10px;
}
.site-log-wrap dd:last-child{
    border-left: none;
}
.site-log-wrap dd .dot{
    width: 15px;
    height: 15px;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    background-color: #bcbcbc;
    display: inline-block;
    position: absolute;
    left: -9px;
    top: 0;
}
.site-log-wrap .log-wrap-con{
    padding-left: 10px;
}

/*确定/取消弹窗*/
/* 遮罩背景 */
#pop_full_window {
	position:fixed;
	top:0;
	left:0;
	z-index:9998;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.39);
}
#pop_full_window_id {
	position:fixed;
	top:0;
	left:0;
	z-index:9998;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.39);
}
/* 弹窗 */
#pop_opendiv {
	position:absolute;
	z-index:9999;
	width:280px;
	border-radius:3px;
	background:#fff;
	padding-bottom:20px;
}
#pop_opendiv h3 {
	line-height:30px;
	padding-left:30px;
	background:#e1e1e1;
	border-bottom:1px solid #e4e7ea;
	position:relative;
	color:#000;
	font-size:14px;
	font-weight:normal;
}
#pop_Opendiv h3 #pop_Opendiv_close {
	position:absolute;
	right:0;
	top:0;
	display:block;
	width:30px;
	height:40px;
	line-height:40px;
	text-align:center;
	cursor:pointer;
}

#pop_opendiv_id {
	position:absolute;
	z-index:9999;
	width:280px;
	border-radius:3px;
	background:#fff;
	padding-bottom:20px;
}
#pop_opendiv_id h3 {
	line-height:30px;
	padding-left:30px;
	background:#e1e1e1;
	border-bottom:1px solid #e4e7ea;
	position:relative;
	color:#000;
	font-size:14px;
	font-weight:normal;
}
#pop_Opendiv_id h3 #pop_Opendiv_close_id {
	position:absolute;
	right:0;
	top:0;
	display:block;
	width:30px;
	height:40px;
	line-height:40px;
	text-align:center;
	cursor:pointer;
}
.pop_opendiv_content_id {
	padding:30px 25px;
	line-height:20px;
	color:#333;
	font-size:16px;
}
#pop_opendiv h3 #pop_opendiv_close:hover {}
.pop_opendiv_content {
	padding:30px 25px;
	line-height:20px;
	color:#333;
	font-size:16px;
}
.m-enter-box{
	height:30px;
	padding:0 10px;
}
.m-enter-box a{
	width:60px;
	height:30px;
	line-height:30px;
	text-align:center;
	color:#586b93;
	font-size:14px;
	cursor:pointer;
}
.m-enter-box a:hover{ background:#f7f7f7;}
.m-enter-box .active {background:#f7f7f7;}

.Open_state_success {
	min-height:100px;
	padding-top:40px;
}
.Open_state_success span {
	display:inline-block;
	background: url(../images/success.png);
	height:51px;
	width:51px;
	margin:0 20px -20px;
}
.Open_state_success p {
	font-size:14px;
	color: #000;
	line-height:52px;
	padding:0 20px;
}
.Open_state_error {
	min-height:100px;
	padding-top:40px;
}
.Open_state_error span {
	display:inline-block;
	background: url(../images/err.png);
	height:42px;
	width:16px;
	margin:0 20px -20px;
}
.Open_state_error p {
	font-size:14px;
	color:#000;
	line-height:52px;
	padding:0 20px;
}
.Open_state_load span {
	background:url(../images/loading.gif);
	display:inline-block;
	width:48px;
	height:48px;
	margin-right:10px;
	margin-bottom:-20px;
}
.Open_state_load p {
	font-size:14px;
	color:#000;
	text-align:center;
	line-height:42px;
}
.pop_Opendiv_loading {
	min-height:60px;
	padding-top:20px;
}

.cut-title{
    width: 16rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:inline-block;
}

.mide{
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
	display: block;
    z-index: 9;
}

div:after{
    content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.add-village-Required{
    display: inline-block;
    margin-right: 5px;
    color: #37c9b7;
    font-weight: normal;
}

.silver-img-comm{
    height: 1.8rem;
    line-height: 1.8rem;
    display: inline-block;
    border-radius:2px;
    padding: 0 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #29cdbb;
    vertical-align: middle;
    margin-left: 0.4rem;
}
.sign-operation{
    color: #29cdbb;
    background: #fff;
}
.sign-open{
    color: #fff!important;
    background: #29cdbb;
}
.isbuy-ico-comm{
    height: 1.8rem;
    line-height: 1.8rem;
    display: inline-block;
    border-radius:2px;
    padding: 0 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #f9bf37;
    vertical-align: middle;
    margin-left: 0.4rem;
}
.isbuy-operation{
    background: #fff;
    color: #f9bf37;
}

.iszhong-ico-comm{
    height: 1.8rem;
    line-height: 1.8rem;
    display: inline-block;
    border-radius:2px;
    padding: 0 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #079fba;
    vertical-align: middle;
    margin-left: 0.4rem;
}
.iszhong-open{
    background: #fff;
    color: #079fba;
}
.site-manage .pt .pt-r{
    border-bottom:1px solid #dcdcdc;
}
.sign-comm-style{
    vertical-align: top;
    margin-right: 0.4rem;
    font-weight: normal;
}
.site-manage-list .pt .pt-r{
    border-bottom: none !important;
}

/* 返回按钮start */
.s-back-btn{
	position:fixed;
	left:0;
	bottom:100px;
	z-index:10000;
	width:40px;
	height:40px;
	border-radius:0 50px 50px 0;
	background:rgba(0,0,0,.8);
	cursor:pointer;
}

.s-back-btn .back-btn{
	float:right;
	width:19px;
	height:14px;
	margin:12px 12px 0 8px;
	background:url(../image/network/back-detail-icon.png) no-repeat;
	background-size:19px 14px;
}

.s-back-btn .back-box{
	display:none;
	line-height:40px;
}

.s-back-btn .back-box li{
	background:url(../image/network/back-line.png) right 12px no-repeat;
	background-size:1px 15px;
}
.s-back-btn .back-box li{
	float:left;
	padding:0 15px;

}
.s-back-btn .back-box li a{
	display:block;
	height:40px;
	color:#fff;
	font-size:12px;
}
.s-back-btn .back-box li.item .icon-item{
	float:left;
	width:19px;
	height:14px;
	margin:12px 7px 0 0;
	background:url(../image/network/back-list-icon.png) no-repeat;
	background-size:19px 14px;
}
.s-back-btn .back-box li.d-icon{ background: none;}
.s-back-btn .back-box li.d-icon .icon-item{

	background:url(../image/network/back-detail-icon.png) no-repeat;
	background-size:19px 14px;
}
.s-back-mask{
	position:absolute;
	left:0;
	top:0;
	z-index:9999;
	width:100%;
	height:100%;
	display:none;
}
/* 返回按钮end */

/* 添加工作按钮start */
.s-addwork-btn{
	position:fixed;
	right:20px;
	bottom:150px;
	z-index:10000;
	width:50px;
	height:50px;
	line-height:14px;
	text-align:center;
	color:#fff;
	border-radius:50%;
	background:#49a3ff url(../image/network/s-addwork-icon.png) center 8px no-repeat;
	background-size:13px 13px;
	box-shadow:0 1px 3px rgba(0,0,0,0.3);
}
.s-addwork-btn span{
	display:block;
	height:22px;
	padding-top:28px;
	color:#fff;
}

.edit-site-list textarea
{
	width:100%;
    height:50px;
    border:none;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    margin-top: 1.3rem;
    padding: 0.5rem;
    font-size: 1.4rem;
    color: #bbb;
    }

.s-enter-btn{
    width: 100%;
    padding: 10px 0;
    text-align: center;
}
.s-enter-btn a{
    width: 90%;
    height: 4rem;
    line-height: 4rem;
    display: inline-block;
    text-align: center;
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    color: #fff;
    font-size: 1.5rem;
    background-color: #1BC5B2;
}

/* 图片上传 */

.s-uploads-item{
    position: relative;
	padding-top:4%;
	padding-bottom:4%;
    border-top: 1px solid rgba(255, 0, 0, 0);
}

.s-uploads-item .s-item .pt-r{border-bottom: 1px solid #dcdcdc;}

.s-uploads-item .u-l{
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
    color: #37c9b7;
}
.s-uploads-item .u-r{
	display: inline-block;
	position:relative;
	width: 90%;
	vertical-align: middle;
}
.s-uploads-item .u-r label{
	font-weight:600;
}

.s-uploads-item .uploads-box{
	position: relative;
	display: inline-block;
	width:70%;
	margin-left:10px;
	vertical-align: middle;
}
.s-uploads-item .uploads-box .img-box{
    float:left;
    width:60px;
    margin-right:5px;
}
.s-uploads-item .uploads-box .img-box img{
	width:60px;
	height:60px;
}
.s-uploads-item .uploads-box .img-box  p{
    font-size: 10px;
    text-align: center;
    color: #bbbbbb;
}

.s-uploads-item .i-con{
	position:absolute;
	top:50%;
	right:0;
	margin:-8px 0 0 0;
    background:url("../image/network/nav.png");
    background-size: 100% 100%;
    width: 11px;
    height: 16px;
}

.site-status-wrap ul{
    margin: 2rem 1.5rem;
}
.site-status-wrap ul li{
    font-size: 1.6rem;
    line-height: 3rem;
    text-align: justify;
}

.site-status-wrap p{
    text-align: center;
}
.site-status-wrap p img{
    width: 25rem;
    height: 25rem;
}
.alert_con{
    margin:0 auto;
    background-color:#000;
    position:fixed;
    opacity:0.5;
    color:#fff;
    padding:1rem 2rem;
    border-radius: 5px;
    z-index: 9999;
    top:46%;
}
