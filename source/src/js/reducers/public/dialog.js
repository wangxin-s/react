/**
 * Created by ex-wangxin on 2017/9/15.
 *
 *
 *
 */
import objectAssign from 'object-assign';
//初始化state
const initalize = {
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
};

function dialog (state = initalize,action) {
    switch (action.type) {
        case "DIALOG_HANDLE"  :
            return objectAssign({},state,action.options);
        default :
            return state;
    }
}

export default dialog;