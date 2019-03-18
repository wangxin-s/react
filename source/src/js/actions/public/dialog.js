/**
 * Created by ex-wangxin on 2017/9/15.
 *
 * 弹框公共插件
 *
 */
/**
 * Created by gaolei on 2017/4/12.
 *
 * 弹窗组件
 */
function dialogHandle(options){
    return {
        type:"DIALOG_HANDLE",
        options
    }
}

function dialogReset(){
    return dispatch => {
        dispatch(dialogHandle({
            show    :false, //默认是关闭弹窗 true打开弹窗
            title   :'',    //弹窗标题
            type    :'confirm', //弹窗类型  confirm / loading / message / tips
            tipsType:'success', //仅限于type=tips有效果  success操作成功 fail 操作失败  warning 操作警告
            content :'',    //弹窗内容
            time    :0, //弹窗消失时间
            width   :"",//弹窗宽度  width:'', 宽度给什么 设置什么 不会转成rem
            hasMask:true,//是否有遮罩层 默认 为 true 有  false 没有
            bgType:'000',//背景类型 默认 000  黑色加透明  fff  白色透明度0 只有 hasMask 为true 有遮罩层时才生效
            bgRemove:false,//遮罩层点击是否移除弹窗 默认为 false点击不消失 只有在hasMask 为 true 有遮罩层是在会生效
            success :function(){return true},//弹窗确定回调函数
            fail    :function(){},//弹窗取消回调函数
            hide    :function(){},//遮罩层消失回调函数
            successBtn:true,//是否显示确定按钮  默认为显示
            failBtn:true,//是否显示取消按钮  默认为显示
            successText:"确定",//确定按钮文字
            failText:"取消",//取消按钮文字
        }));
    }
}

function ajaxErrorLog(xhr, errorType, error,dispatch){

    let options=null;
    if (errorType == "abort") { //无网络
        options={
            type:"tips",
            tipsType:"warning",
            show:true,
            content:"网络已断开,请重新登录试试"
        }
    } else if (errorType == "timeout") { //超时
        options={
            type:"tips",
            tipsType:"warning",
            show:true,
            content:"系统连接超时,请重新登录试试"
        }
    } else if (errorType == "error") { //服务器或者客户端错误
        switch (xhr.status) {
            case 401:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"登录超时，请重新登录",
                    success:function(){
                        sessionStorage.clear();
                        window.location.href = "/";
                    }
                }
                break;
            case 402:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"您的帐号在其他设备登录，您被迫下线",
                    success:function(){
                        sessionStorage.clear();
                        window.location.href = "/";
                    }
                }
                break;
            case 403:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"没有权限，禁止访问"
                }
                break;
            case 404:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"未找到服务器,请重新登录试试"
                }
                break;
            case 500:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"服务器未响应,请重新登录试试"
                }
                break;
            case 503:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"服务器不可用,请重新登录试试"
                }
                break;
            case 504:
                options={
                    type:"tips",
                    tipsType:"warning",
                    show:true,
                    content:"网关超时,请重新登录试试"
                }
                break;
        }
    }

    if(options){
        dispatch(dialogHandle(options))
    }
}

export   {dialogHandle,ajaxErrorLog,dialogReset};
