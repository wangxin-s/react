import React from 'react';
require('../../css/three.scss');
class ThreeIndex extends React.Component{

    clickFun(){
        this.props.history.push('/Index');
    }

    render(){
        return (
            <div>
                这是第三个页面，页面名称three.js,路由是Three
                <a href="javascript:;" onClick={this.clickFun.bind(this)}>点击跳转到index页面</a>
            </div>
        )
    }
}
export default ThreeIndex;