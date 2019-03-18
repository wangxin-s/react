import {dialogHandle, ajaxErrorLog} from './public/dialog';
function listHandle(state){
    return {
        type:'LIST_HANDLE',state
    }
}
function getLoginFun(options){
    return dispatch=>{
        $.XlAjax({
            url: "accountLogin",
            data: options,
            success: (data)=>{
                dispatch(dialogHandle({
                    type:"tips",
                    tipsType:"warning",
                    bgRemove:true,
                    show:true,
                    content:"登录超时，请重新登录",
                    success:function(){
                        sessionStorage.clear();
                        window.location.href = "/";
                    }
                }));
            },
            error:function(){
                dispatch(freeLoanHandle({
                    tbodyList:"fail"
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            },
        });
    }
}
export {
    listHandle,getLoginFun
}