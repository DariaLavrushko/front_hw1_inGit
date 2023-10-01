import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sandwich: React.FC = (): JSX.Element => {
    const sandwich = useSelector(
        (state: RootState) => state.sandwich.ingredients
    );
    const dispatch = useDispatch();

    const handleHleb = (): void => {
        dispatch({ type: "sandwich/addIngredient", payload: "Bread" });
    };
    const handleSir = (): void => {
        dispatch({ type: "sandwich/addIngredient", payload: "Cheese" });
    };
    const handleKolbasa = (): void => {
        dispatch({ type: "sandwich/addIngredient", payload: "Salami" });
    };
    const handleClear = (): void => {
        dispatch({ type: "sandwich/clear" });
    };

    return (
        <>
            <h1>Chose you sandwich: </h1>
            <p>Sandwich: {sandwich}</p>
            <button onClick={handleHleb}>Add Bread</button>
            <button onClick={handleSir}>Add Cheese</button>
            <button onClick={handleKolbasa}>Add Salami</button>
            <button onClick={handleClear}>Delete All</button>
        </>
    );
};

export default Sandwich;
