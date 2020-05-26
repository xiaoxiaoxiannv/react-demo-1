import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        document.querySelector('#x').innerText = `value: 1000`
    }, [value]);

    return (
        <div id="x" onClick={() => setValue(0)}>value: {value}</div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
