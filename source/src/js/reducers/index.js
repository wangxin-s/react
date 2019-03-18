import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import list from './list';
import dialog from './public/dialog'

const reducer=combineReducers({
    dialog,
    list,
    routing:routerReducer
});
export default reducer;