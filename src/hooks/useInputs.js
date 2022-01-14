import React, { useState } from 'react';

function useInputs(initialForm){
    const [form,setForm] = useState(initialForm);
    const onChange = e =>{
        const { name, value } = e.target
        setForm(form => ({
            ...form,        // 현재 form의 원본을 가져온다.
            [name]: value   // 그 값들 중 키가 name인 요소의 값을 value로 덮어씌운다.
        }))
    }
    const reset = () => setForm(initialForm);
    return [form,onChange,reset];
}
// 함수 useInputs가 호출되면 배열로 form과 함수 onChange, 함수 reset이 반환된다.
// 이를 구조분해할당으로 받아 활용하는 편의적인 커스텀 Hook 완성.
export default useInputs;