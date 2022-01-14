import logo from './logo.svg';
import { useState, useRef } from 'react'
import './App.css';

function App() {
  const [currentNum,setCurrentNum]=useState()
  const num = useRef(6);
  useRef의 기능은
  const usernameIn = useRef();
  const onClick = () => {
    const inputValue = usernameIn.current.value
    // useRef는 객체 형태이므로, 값을 출력하기 위해서는 .current를 붙여줘야 한다.
    console.log(inputValue)
    num.current = num.current + 1
    setCurrentNum(num.current)
    // num.current의 상태를 업데이트(리렌더링)
    usernameIn.current.value = '';
    // usernameIn의 value를 공백으로 만든 후
    usernameIn.current.focus();
    // usernameIn에 포커스를 둠.
  }

  return (
    <div className="App">
      <h2>useRef 값은 current라는 키로 접근</h2>
      <p>{currentNum}</p>
      <p><input name="username" ref={usernameIn} />
      {/* ref를 통해 앵커 설치 */}
        <button onClick={onClick}>인풋의 value 가져오기</button>
      </p>
    </div>
  );
}

export default App;
