import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INIZIALIZED_SUCCESS = 'INIZIALIZED_SUCCESS';

let initialState = ({
    initialized: false,
});

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIZIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default: return state;
    }
}
export const initializedSuccess = () => ({
    type: INIZIALIZED_SUCCESS,
});

export const inizializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    dispatch(initializedSuccess());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });

};

export default appReducer;