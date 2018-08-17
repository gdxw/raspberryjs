

import * as common from './action-type';

const initialState = {
    collapsed: true,
    text: 'Use Redux',
    completed: false,
    id: 0,
}

export const commonStore = (state = initialState, action) => {
    switch (action.type) {
        // 收缩菜单栏
        case common.OPEN_SUBMEN: 
            return {...state, collapsed: action.value}
            break;
        case "INDEX_TIT":
            return action.data;
            break;
        default:
            return state
    }
}