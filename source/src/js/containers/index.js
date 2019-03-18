import React from 'react';
import Dialog from './public/dialog';
class Index extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="title">
                {this.props.children}
                <Dialog />
            </div>
        )
    }
}
export default Index;