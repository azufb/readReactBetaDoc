import React, { useState } from 'react';

type SampleObjType = {
    firstName: string;
    lastName: string;
    age: number;
};

const StateHooks = () => {
    const [age, setAge] = useState<number>(24);
    const [name, setName] = useState<string>('名無し');
    const [inputName, setInputName] = useState<string>('');
    const [sampleObj, setSampleObj] = useState<SampleObjType>({
        firstName: 'Hanako',
        lastName: 'Yamada',
        age: 24
    });

    const onChangeInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }

    const handleSetNameFunc = () => {
        setName(inputName);
    };

    const incrementFunc = () => {
        setAge(currentAge => currentAge + 1);
    };

    const decrementFunc = () => {
        setAge(currentAge => currentAge - 1);
    };

    const changeLastNameFunc = () => {
        // スプレッド構文を使い、更新したいプロパティのみ更新する。
        setSampleObj({
            ...sampleObj,
            lastName: 'Okamoto'
        });
    };

    const changeAgeFunc = () => {
        setSampleObj({
            ...sampleObj,
            age: 20
        });
    };

    return (
        <div>
            <h1>State Hooksについて</h1>
            <div>
                <div>
                    <label>お名前：</label>
                    <span>{name}</span>

                    <div>
                        <input type='text' value={inputName} onChange={(e: any) => onChangeInputFunc(e)} />
                        <button onClick={handleSetNameFunc}>送信</button>
                    </div>
                </div>

                <div>
                    <label>年齢：</label>
                    <span>{age}</span>

                    <div>
                        <button onClick={incrementFunc}>1歳足す</button>
                        <button onClick={decrementFunc}>1歳引く</button>
                    </div>
                </div>

                <div>
                    <label>サンプルオブジェクト：</label>
                    <p>{sampleObj.firstName}</p>
                    <p>{sampleObj.lastName}</p>
                    <p>{sampleObj.age}歳</p>

                    <div>
                        <button onClick={changeLastNameFunc}>苗字を「岡本」に変える</button>
                        <button onClick={changeAgeFunc}>20歳に若返る</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StateHooks;