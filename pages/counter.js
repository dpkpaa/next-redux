import React from "react";
import Layout from "../components/layout";
import { useSelector, useDispatch } from 'react-redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "../store/action/actionTypes";

const useCounter = () => {
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()
    const increment = () =>
        dispatch({
            type: COUNTER_INCREMENT
        });
    const decrement = () =>
        dispatch({
            type: COUNTER_DECREMENT
        });
    return { counter, increment, decrement }
};
function counter() {const {counter,increment,decrement} = useCounter();
  return (
    <Layout>
      <h1>Counter</h1>
      <div className="btn btn-group btn-group-lg">
        <button className="btn btn-success" onClick={decrement}>Decrement</button>
        <span className="btn btn-secondary">
            {counter}
        </span>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
      </div>
    </Layout>
  );
}


export default counter;
