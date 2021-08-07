import { actions } from 'store/actions';
// typescript : we are defining for a type 2 values
type state = { color: "red" | "yellow" };
type action<T = any> = { type: string, payload: T };

export function colorReducer(state: state = { color: "red" }, action: action) {
    switch (action.type) {
        case actions.color.SET_RED:
            return { color: "red" }
        case actions.color.SET_YELLOW:
            return { color: "yellow" }
        default:
            return state
    }
};