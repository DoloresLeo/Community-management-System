import '../../action/user';
import '../../action/userModal';
import types from '../../types';

const initialState = {
    status:''//弹窗状态
}
const indexFilter = (state=initialState,action)=>{
    let copyState = {...state};
    switch(action.type){
        case types.USER_MODAL:
            copyState.status='这是存储弹窗状态';
            return copyState;
            default:
                return copyState;
    }
};
export default indexFilter;