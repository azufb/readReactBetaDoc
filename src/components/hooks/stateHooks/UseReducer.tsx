import React, { useReducer } from 'react';

type StateType = {
    age: number
}

type ReducerActionType = {
    type: string;
};

const reducer = (state: StateType, action: ReducerActionType) => {
    switch (action.type) {
        case 'incremented_age':
            return {
                age: state.age + 1
            };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { age: 24 });

    const incrementFunc = () => {
        dispatch({ type: 'incremented_age' });
    };

    return (
        <div>
            <h2>useReducerについて</h2>
            <div>
                <label>年齢：</label>
                <span>{state.age}歳</span>

                <div>
                    <button onClick={incrementFunc}>年齢を1歳足す</button>
                </div>
            </div>
        </div>
    )
};

export default UseReducer;