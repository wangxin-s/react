function pagePlugFun(options){
    //console.log("current page"+options.curPage);
    let cur_page = options.curPage?options.curPage:1;//当前第几页
    let page_count = options.pageCount?options.pageCount:10;//每页多少条
    let lock = options.lock?options.lock:false;//是否自动加载
    let pageLoading = options.pageLoading?options.pageLoading:false;//是否自动加载
    let callBack = options.callBack?options.callBack:null;//回调方法
    let $body=document.getElementsByTagName('body')[0];
    let $pagePlug=document.getElementsByClassName('page-plug-wrap');
    //window.onscroll=function(){
    if((window.scrollY+window.innerHeight)>=($body.clientHeight-5)){
        if($pagePlug.length>1||lock){
            return false;//防止重复加载，返回
        }else{
            lock=true;//防止多次触发加载
            pageLoading=true;
            if(typeof callBack==='function'){

                callBack(cur_page,page_count,lock,pageLoading);
                cur_page+=1;

            };//传入回调参数，执行分页AJAX
        }
    }
    //};
}

function titleChangeFun(title){
    //上传图片 安卓  ios 兼容性 修复   2017-05-10
    let u = navigator.userAgent.toLowerCase();
    let isApple = /(iphone|ipad|ipod|ios)/i.test(u);
    let isAndroid = /android/i.test(u);
    if(isApple){    //apple终端
        titleFun(title);
    } else if(isAndroid){
        //安卓终端
        document.title=title;
    }
    //更改title
    function titleFun(titleStr){
        document.title = titleStr;
        let iframe=document.createElement('iframe');
        iframe.style.cssText = 'display: none; width: 0; height: 0;';
        iframe.src=require('../../../images/common/fail.png');
        function listener(){
            iframe.removeEventListener('load', listener);
            setTimeout(function() {
                document.body.removeChild(iframe);
            }, 0);
        }
        iframe.addEventListener('load', listener);
        document.body.appendChild(iframe);
    }
}


export{
    pagePlugFun,
    titleChangeFun
}
