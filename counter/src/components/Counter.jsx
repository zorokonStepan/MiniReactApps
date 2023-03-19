import React, {useState} from 'react';
import {is_only_numeric} from "../utilities/util";


export const Counter = () => {
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleAddOne = () => {
        setCount(count + 1);
    }

    const handleSubtractOne = () => {
        setCount(count - 1);
    }

    const handleOnChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleAddQuantity = () => {
        if (is_only_numeric(quantity)) {
            const value = parseInt(quantity, 10);
            setCount(count + value);
        } else {
            alert('value must be a number');
        }
    }

    const handleSubtractQuantity = () => {
        if (is_only_numeric(quantity)) {
            const value = parseInt(quantity, 10);
            setCount(count - value);
        } else {
            alert('value must be a number');
        }
    }

    return (
        <>
            <h2>{count}</h2>

            <div>
                <button onClick={handleAddOne}>+1</button>
                <button onClick={handleSubtractOne}>-1</button>
            </div>

            <div>
                <input type="text" value={quantity} onChange={handleOnChange} />
                <button onClick={handleSubtractQuantity}>-</button>
                <button onClick={handleAddQuantity}>+</button>
            </div>
        </>
    );
}
