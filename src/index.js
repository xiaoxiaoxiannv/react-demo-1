import React ,{useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [user,setUser] = useState(()=>({name:'Frank',age:9+9}));
    const onClick = ()=>{
        setUser({
            ...user,
            name: 'Jack'
        })
    };
    return(
        <div className="App">
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);

