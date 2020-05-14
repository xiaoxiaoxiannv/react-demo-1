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
        return(
            <>
                {this.state.n%2===0?
                    <div>偶数</div>:
                    <span>奇数</span>
                }
                <button onClick={this.onClick}>+1</button>
            </>
        )
    }
}

export default App;
