import React, {useReducer} from 'react';
import "./Counter.css";


const initialState = { count: 0, quantity: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "addOne":
            return { ...state, count: state.count + 1 };
        case "subtractOne":
            return { ...state, count: state.count - 1 };
        case "addQuantity":
            return { ...state, count: state.count + parseInt(state.quantity, 10) };
        case "subtractQuantity":
            return { ...state, count: state.count - parseInt(state.quantity, 10) };
        case "setQuantity":
            return { ...state, quantity: action.payload };
        case "resetCounter":
            return initialState;
        default:
            throw new Error();
    }
};


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubtractOne = () => {
        dispatch({ type: "subtractOne" });
    };

    const handleAddOne = () => {
        dispatch({ type: "addOne" });
    };

    const handleOnChange = (e) => {
        dispatch({ type: "setQuantity", payload: e.target.value });
    };

    const handleSubtractQuantity = () => {
        if (state.quantity) dispatch({ type: "subtractQuantity" });
    };

    const handleAddQuantity = () => {
        if (state.quantity) dispatch({ type: "addQuantity" });
    };

    const handleResetCounter = () => {
        dispatch({ type: "resetCounter" });
    };

    return (
        <div
            id={"content-wrapper"}
            className={"flex column vertical-align horizontal-align"}
        >
            <h1>Simple Counter in React using Hooks</h1>
            <div
                id={"counter-wrapper"}
                className={"flex column vertical-align justify-sp-ev"}
            >
                <div className={"flex column vertical-align"}>
                    <p>{state.count}</p>
                    <div className={"flex row justify-sp-ar mt-10"}>
                        <button className={"mr-5"} onClick={handleSubtractOne}>
                            -1
                        </button>
                        <button onClick={handleAddOne}>+1</button>
                    </div>
                </div>
                <div>
                    <h3>Add / subtract custom quantity</h3>
                    <div className={"flex row vertical-align horizontal-align"}>
                        <input
                            type="text"
                            value={state.quantity}
                            onChange={handleOnChange}
                            className={"mr-10"}
                        />

                        <button
                            className={"mr-5 width-40"}
                            onClick={handleSubtractQuantity}
                        >
                            -
                        </button>
                        <button className={"width-40"} onClick={handleAddQuantity}>
                            +
                        </button>
                    </div>
                </div>
                <button id={"counter-reset"} onClick={handleResetCounter}>
                    Reset Counter
                </button>
            </div>
        </div>
    );
}
