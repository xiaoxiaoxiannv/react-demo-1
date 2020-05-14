import React from 'react';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            n: 1
        }
    }

    onClick = () => {
        this.setState(state => ({n: state.n + 1}))
    }

    render() {
        let message
        if (this.state.n % 2 === 0) {
            message=<div>偶数</div>
        } else {
            message=<span>奇数</span>
        }
        return(
            <>
                {message}
                <button onClick={this.onClick}>+1</button>
            </>
        )
    }
}

export default App;
