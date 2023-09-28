import { combineReducers, createStore } from "redux";
import sandwichReducer from "./SandwichReducer";

const store = createStore(combineReducers({
    sandwich: sandwichReducer
}));

export default store;
export type RootState = ReturnType<typeof store.getState>;
