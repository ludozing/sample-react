import logo from './logo.svg';
import { useState, useRef } from 'react'
import './App.css';

function App() {
  const [currentNum,setCurrentNum]=useState()
  const num = useRef(6);
  const usernameIn = useRef();
  const onClick = () => {
    const inputValue = usernameIn.current.value
    console.log(inputValue)
    num.current = num.current + 1
    setCurrentNum(num.current)
    usernameIn.current.value = '';
    usernameIn.current.focus();
  }

  return (
    <div className="App">
      <h2>useRef 값은 current라는 키로 접근</h2>
      <p>{currentNum}</p>
      <p><input name="username" ref={usernameIn} />
        <button onClick={onClick}>인풋의 value 가져오기</button>
      </p>
    </div>
  );
}

export default App;
