import React, { useRef } from "react";
import ReactDOM from "react-dom";


function App() {
    const buttonRef = useRef(null);
    return (
        <div className="App">
            <Button2 ref={buttonRef}>按钮</Button2>
        </div>
    );
}

const Button2 = React.forwardRef((props,ref)=>{
    return <button className="red" ref={ref} {...props} />
});
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
