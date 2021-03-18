import React from "react";

const Counter = ({
    name,
    number,
    onIncrease,
    onDecrease,
    onChangeinput,
}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+ 1</button>
            <button onClick={onDecrease}>- 1</button>
            <input onChange={onChangeinput} placeholder="이름을 입력하세요."></input>
        </div>
    )
}

export default Counter;