import { combineReducers, createStore } from "redux";
import sandwichReducer from "./SandwichReducer";
import booksReduser from "./booksReduser";

const store = createStore(combineReducers({
    sandwich: sandwichReducer,
    books: booksReduser
}));

export default store;
export type RootState = ReturnType<typeof store.getState>;
