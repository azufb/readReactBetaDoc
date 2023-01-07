import React, { useState } from 'react';

const StateHooks = () => {
    const [age, setAge] = useState<number>(24);
    const [name, setName] = useState<string>('名無し');
    const [inputName, setInputName] = useState<string>('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }

    const handleSetName = () => {
        setName(inputName);
    };

    const increment = () => {
        setAge(currentAge => currentAge + 1);
    };

    const decrement = () => {
        setAge(currentAge => currentAge - 1);
    }

    return (
        <div>
            <h1>State Hooksについて</h1>
            <div>
                <div>
                    <label>お名前：</label>
                    <span>{name}</span>

                    <div>
                        <input type='text' value={inputName} onChange={(e: any) => onChangeInput(e)} />
                        <button onClick={handleSetName}>送信</button>
                    </div>
                </div>

                <div>
                    <label>年齢：</label>
                    <span>{age}</span>

                    <div>
                        <button onClick={increment}>1歳足す</button>
                        <button onClick={decrement}>1歳引く</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StateHooks;