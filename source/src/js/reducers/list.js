const listState = {
    name: 123,
};
function list (state = listState, action){
    switch (action.type) {
        case 'LIST_HANDLE':
            //console.log({...state,...action.state});
            return {...state,...action.state};
        default:
            return state;
    }
};
export default list;