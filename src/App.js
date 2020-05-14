import React, {useEffect, useState} from 'react';

const App =props=>{
    const [childVisible,setChildVisible] = useState(true)
    const hide =()=>{
        setChildVisible(false)
    }
    const show =()=>{
        setChildVisible(true)
    }
    return(
        <div>
            {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>}
            {childVisible ? <Child/> : null}
        </div>
    )
}

const Child = (props)=>{
    useEffect(()=>{
        console.log('渲染了')
        return ()=>{
            console.log('Child销毁了')
        }
    })
    return(
        <div>Child</div>
    )
}

export default App;
