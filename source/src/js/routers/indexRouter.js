import Bundle from '../components/bundle';
import React from "react";

export const newList=(props) => (
    <Bundle load={() => import('../containers/list')}>
        {(List) => <List {...props} />}
    </Bundle>
);
export const Video=(props) => (
    <Bundle load={() => import('../containers/video')}>
        {(Video) => <Video {...props} />}
    </Bundle>
);