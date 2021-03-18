import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { increase, decrease, changeInput } from "../reducer/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
    const counterNum = useSelector(state => state.counter.number);
    const name = useSelector(state => state.counter.input);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => {
        dispatch(increase())
    }, [dispatch]);
    const onDecrease = useCallback(() => {
        dispatch(decrease())
    });
    const onChangeinput = useCallback(e => {
        dispatch(changeInput(e.target.value))
    })

    return <Counter name={name} number={counterNum} onIncrease={onIncrease} onDecrease={onDecrease} onChangeinput={onChangeinput} />;
};

/*
const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
});

const mapStateToProps = state => ({
    counterNum: state.counter.number
});
*/

export default CounterContainer;