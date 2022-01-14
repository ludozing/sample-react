import React from 'react';
import { useReducer } from 'react';

export default function Counter() {
    function reducer(state, action){
        switch(action.type) {   // reducer 함수는 dispatch로 받은 type 값에 따라 다르게 실행된다.
            case 'INCREASE':    // dispatch로 받은 값의 type이 'INCREASE'인 경우
                return state+1; // 관리하고 있는 state의 값에 +1 한다.
            case 'DECREASE':
                return state-1;
            default:            // 평시엔 state의 값을 반환
                return state;
        }
    }
    const [number, dispatch] = useReducer(reducer, 0);  // userReducer(reducer, 초기값)
    // reducer함수에 state로 들어갈 값은 number
    function onIncrease () {
        dispatch({type: 'INCREASE'})
    }
    function onDecrease(){
        dispatch({type: 'DECREASE'})
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    )
}