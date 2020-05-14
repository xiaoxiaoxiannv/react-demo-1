import React, {useEffect, useState} from 'react';

const App =props=>{
    const [n,setN] = useState(0)
    const onClick = ()=>{
        setN(n+1)
    }
    useEffect(()=>{
        console.log('第一次渲染')
    },[])
    return(
        <div>
            {n}
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default App;
