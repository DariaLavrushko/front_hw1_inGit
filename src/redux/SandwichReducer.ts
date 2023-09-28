import Action from "../types/Action";
import { SandwichState } from "../types/SandwichState";

const initialState: SandwichState = {
    value: 'sandwich with'
}

export default function sandwichReducer (
    state: SandwichState = initialState,
    action: Action
):SandwichState{
    switch (action.type) {
        case 'sandwich/hleb':
            return {...state, value: state.value + action.payload};
        case 'sandwich/sir':
            return {...state, value: state.value + action.payload};
        case 'sandwich/kolbasa':
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
}