/**
 * Created by ex-wangxin on 2017/9/15.
 *
 * 弹框公共插件
 *
 */
import React from 'react';
import {connect} from 'react-redux';
import {dialogHandle,dialogReset} from '../../actions/public/dialog';

let timeHandle;

class ReactDialog extends React.Component {

    //点击取消回调函数
    failAction() {
        clearTimeout(timeHandle);
        this.props.dialog.fail();
        this.hideAction();
    }

    //点击确定回调函数
    successAction() {
        clearTimeout(timeHandle);
        //回调返回TRUE，则进行关闭弹窗
        if (this.props.dialog.success()) {
            this.hideAction();
        }
    }

    //弹框隐藏回调函数
    hideAction() {
        this.props.dialog.hide();
        //弹窗消失并且初始化
        this.props._dialogHandle({
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
        });
    }

    //弹框 confirm 类型回调函数
    viewConfirm() {
        return (
            <div className="dialog-confirm dialog-amend" style={{
                width: this.props.dialog.width ? this.props.dialog.width : '5.36rem',
            }}
                 onClick={this.stopBubble.bind(this)}
            >
                <div className="dialog-body">
                    {this.props.dialog.content==""?'content内容':this.props.dialog.content}
                </div>
                {this.creatBtn()}
            </div>
        )
    }

    //确定取消按钮
    creatBtn(){
        let failBtn=this.props.dialog.failBtn;
        let successBtn=this.props.dialog.successBtn;
        if(!failBtn&&!successBtn){
            return '';
        }else{
            return (
                <div className="dialog-foot">
                    <ul className="btn-box">
                        {failBtn?<li className={"btn-close "+(successBtn?"":"w100")} onClick={this.failAction.bind(this)}>{this.props.dialog.failText}</li>:''}
                        {successBtn?<li className={"btn-submit "+(failBtn?"":"w100")} onClick={this.successAction.bind(this)}>{this.props.dialog.successText}</li>:''}
                    </ul>
                </div>
            )
        }
    }

    //弹框 tips 类型回调函数
    viewTips() {
        let content = 'content内容';
        let bg='';
        switch (this.props.dialog.tipsType) {
            case 'success':
                bg=<span className="loading success"></span>;
                content ='操作成功';
                break;
            case 'fail'   :
                bg=<span className="loading fail"></span>;
                content = '操作失败';
                break;
            case 'warning':
                bg=<span className="loading fail"></span>;
                content = '警告';
                break;
            default :
                break;
        }
        return (
            <div className="dialog-tips dialog-amend" onClick={this.stopBubble.bind(this)}
                 style={{width: this.props.dialog.width ? this.props.dialog.width : '3.08rem',}}
            >
                <div className="dialog-loading-bg"></div>
                <div className="dialog-loading-content">
                    {bg}
                    {this.props.dialog.content==""?content:this.props.dialog.content}
                </div>
            </div>
        )
    }

    //弹框 message 类型
    viewMessage(){
        return (
            <div className="dialog-message type-cont dialog-amend"
                 style={{width: this.props.dialog.width ? this.props.dialog.width : '4.78rem',}}
                 onClick={this.stopBubble.bind(this)}
            >
                    {this.props.dialog.content==''?'content内容':this.props.dialog.content}
            </div>
        )
    }
    //弹框类型回调函数
    renderType(type) {
        if (this.props.dialog.time > 0) {
            timeHandle = setTimeout(()=> {
                this.failAction()
            }, this.props.dialog.time);
        }
        switch (type) { // type类型  confirm / loading / tips / box
            case 'confirm':
                return this.viewConfirm();
            case 'loading':
                return (
                        <div className="dialog-loading dialog-amend" onClick={this.stopBubble.bind(this)}
                             style={{width: this.props.dialog.width ? this.props.dialog.width : '3.08rem',}}
                        >
                            <div className="dialog-loading-bg"></div>
                            <div className="dialog-loading-content">
                                <span className="loading"></span>
                                {this.props.dialog.content}
                            </div>
                        </div>
                );
            case 'tips'   :
                return this.viewTips();
            case 'message'   :
                return this.viewMessage();
            default :
                return '';
        }
    }

    //冒泡事件中断
    stopBubble(e) {
        // 如果提供了事件对象，则这是一个非IE浏览器
        if (e && e.stopPropagation) {
            // 因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }

    //页面props渲染 结束后生命周期函数 调用修正弹框位置
    componentDidUpdate(){
        let content=document.getElementsByClassName('dialog-amend')[0];
        content.style.marginTop=-(content.offsetHeight/2)+'px';
        content.style.marginLeft=-(content.offsetWidth/2)+'px';
    }
    render() {
        return (
            <div id="react-dialog" onClick={this.props.dialog.bgRemove ? this.hideAction.bind(this) : null}
                 className={'new-dialog-position ' + (this.props.dialog.hasMask ? "new-dialog-bg" : "") +(this.props.dialog.bgType=='fff'?' new-dialog-bg-color':'')}
                 style={{display: this.props.dialog.show ? 'block' : 'none'}}>
                {this.renderType(this.props.dialog.type)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        _dialogHandle: (options)=> {
            dispatch(dialogHandle(options));
        }
    }
}

const Dialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactDialog);

export default  Dialog;