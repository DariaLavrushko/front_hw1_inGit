import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sandwich: React.FC = (): JSX.Element => {
    const sandwich = useSelector((state: RootState) => state.sandwich.value);
    const dispatch = useDispatch();
    const handleHleb = (): void => {
        dispatch({ type: "sandwich/hleb", payload: " Хлеб " });
    };
    const handleSir = (): void => {
        dispatch({ type: "sandwich/sir", payload: " Сыр " });
    };
    const handleKolbasa = (): void => {
        dispatch({ type: "sandwich/kolbasa", payload: " Колбаса " });
    };

    return (
        <>
            <div>Sandwich: {sandwich}</div>
            <button onClick={handleHleb}>+Хлеб</button>
            <button onClick={handleSir}>+Сыр</button>
            <button onClick={handleKolbasa}>+Колбаса</button>
        </>
    );
};

export default Sandwich;
