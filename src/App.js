import logo from './logo.svg';
import { useState, useRef } from 'react'
import Counter from './components/Counter';
import useInputs from './hooks/useInputs';
import './App.css';

function App() {
  const [currentNum,setCurrentNum]=useState();
  const num = useRef(6);
  // useRef의 기능은 두 가지다.
  // 1. 변경 가능한 값을 설정하는 것. 그러나 useState와 달리 리렌더링 트리거가 아니므로 즉각 변화를 확인할 순 없다.
  // 2. DOM을 선택하는 것. ref={useRef()를 담은 변수}를 태그에 attribute로 달아 놓으면, .current.value 등으로 접근할 수 있다.
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
  const [{username,email},onChange,reset] = useInputs({
    // 초기값
    username:'',
    email:''
  })
  return (
    <div className="App">
      <div>
        <h2>useRef 값은 current라는 키로 접근</h2>
        <p>{currentNum}</p>
        <p><input name="username" ref={usernameIn} />
        {/* ref를 통해 앵커 설치 */}
          <button onClick={onClick}>인풋의 value 가져오기</button>
        </p>
      </div>
      <hr/>
      <Counter />
      <hr/>
      <div>
        <p>username의 값은 {username}이고, email의 값은 {email}입니다.</p>
        <p>
          <input name="username" value={username} onChange={onChange}/>
          <input name="email" value={email} onChange={onChange}/>
          <button onClick={reset}>reset</button>
        </p>
      </div>
    </div>
  );
}

export default App;
