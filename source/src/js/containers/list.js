import React from 'react';
import { connect } from 'react-redux';
import {listHandle,getLoginFun} from '../actions/list';
import {dialogHandle,dialogReset} from '../actions/public/dialog';
require('../../css/list.scss');
class ListMain extends React.Component{

    clickFun(){
        this.props._getLoginFun();
        /*this.props._dialogHandle({
            type:"tips",
            tipsType:"warning",
            bgRemove:true,
            show:true,
            content:"登录超时，请重新登录",
            success:function(){
                sessionStorage.clear();
                window.location.href = "/";
            }
        });*/
        let m=[1,2,3,4];
        let n=[5.6,7];
        let k=[...m,...n];
        console.log(this.props);
        console.log(this.props.index);
        console.log($);
        console.log(accounting);
        console.log(moment);
        console.log(echarts);
        return k.map((item,i)=>{
            return <p key={i}>这是第{i}个</p>
        })




        //this.props.history.push('/Three')
        /*console.log(this.props.list);
        this.props._listHandle({
            name:'beijing'
        })*/
    }

    render(){
        return(
            <div>
                这是list页面 路由是List
                <a href="javascript:;" style={{color:'red'}} onClick={this.clickFun.bind(this)}>点击跳转到three页面</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

const mapDispatchToProps=(dispatch)=>{
    return{
        _listHandle:(options)=>{
            dispatch(listHandle(options))
        },
        _dialogHandle:(options)=>{
            dispatch(dialogHandle(options))
        },
        _dialogReset:(options)=>{
            dispatch(dialogReset(options))
        },
        _getLoginFun:(options)=>{
            dispatch(getLoginFun(options))
        },
    }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMain);

export default List;