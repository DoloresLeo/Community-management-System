import '../../action/user';
import '../../action/userModal';
import types from '../../types';

const initialState = {
    info:''//用户信息
}
const indexFilter = (state=initialState,action)=>{
    let copyState = {...state};
    switch(action.type){
        case types.USER_INFO:
            copyState.info='这是存储用户信息';
            return copyState;
            default:
                return copyState;
    }
};
export default indexFilter;