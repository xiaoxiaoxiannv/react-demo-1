import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.getElementById('root')
//import useUpdate from "./useUpdate.js";

let _state = [];
let index =0;
const myUseState = (initialValue)=>{
    const currentIndex = index
    _state[currentIndex]=_state[currentIndex] === undefined ? initialValue : _state[currentIndex];
    const setState = newValue =>{
        _state[currentIndex] = newValue;
        render()
    }
    index += 1
    return [_state[currentIndex],setState]
}

const render = ()=>{
    index = 0
    ReactDOM.render(<App/>,rootElement)
}

const App = props => {
    const [n, setN] = myUseState(0)
    const [m, setM] = myUseState(0)
    const onClickN = () => {
        setN(n + 1)
    }
    const onClickM = () => {
        setM(m + 1)
    }

    return (
        <div>
            {n}
            <button onClick={onClickN}>n+1</button>
            <hr />
            {m}
            <button onClick={onClickM}>m+1</button>
        </div>
    )
}


export default App;
