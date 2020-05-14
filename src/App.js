import React, {useEffect, useState} from 'react';

const App =props=>{
    const [n,setN] = useState(0)
    const [m,setM] = useState(0)
    const onClickN = ()=>{
        setN(n+1)
    };
    const onClickM = ()=>{
        setM(m+1)
    };

    useEffect(()=>{
        console.log('第一次渲染')
    },[])

    useEffect(()=>{
        console.log('n变了')
    },[n])

    return(
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
