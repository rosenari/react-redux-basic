//counter reducer
import { createAction, handleActions } from 'redux-actions';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const CHANGE_INPUT = "counter/CHANGE_INPUT";

//export const increase = () => ({ type: INCREASE });
//export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const changeInput = createAction(CHANGE_INPUT, input => input);

const initialState = {
    number: 0,
    input: '기본'
};

/*
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - 1
            };
        case CHANGE_INPUT:
            return {
                ...state,
                input : action.payload
            }
        default:
            return state;
    }
}
*/

const counter = handleActions({
    [INCREASE]: (state, action) => ({
        ...state,
        number: state.number + 1
    }),
    [DECREASE]: (state, action) => ({
        ...state,
        number: state.number - 1
    }),
    [CHANGE_INPUT]: (state, { payload: input }) => ({
        ...state,
        input: input
    })
},
    initialState);

export default counter;