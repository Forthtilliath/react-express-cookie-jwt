import * as actionType from '../_constants/actionTypes';
import { COOKIE_NAME } from '../_constants/app.const';

const authReducer = (state = { authData: null }, action: { type: string; data: any;payload:any }) => {
    switch (action.type) {
        case actionType.AUTH:
            // localStorage.setItem(COOKIE_NAME, JSON.stringify(action.payload));

            return { ...state, authData: action.payload };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
