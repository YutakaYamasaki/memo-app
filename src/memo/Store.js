import { createStore } from 'redux';

const initData =  {
    data: [{message: 'sample data', created: new Date()}],
    message: 'please type message',
    mode: 'default',
    fdata: []
}

export function memoReducer(state= initData, action){
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        default:
            return state;
    }
}
function addReduce(state,action){
    let data = {
        message: action.message,
        created: new Date()
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data: newdata,
        message: 'Added',
        mode: 'default',
        fdata: []
    };
}

export function addMemo(text){
    return{
        type:'ADD',
        message:text
    }
}

export default createStore(memoReducer);