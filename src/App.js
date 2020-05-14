import React from 'react';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            n: 1,
            array:[1,2,3]
        }
    }

    onClick = () => {
        this.setState(state => ({n: state.n + 1}))
    }

    render() {
        return this.state.array.map(n=><span>{n}</span>)
    }
}

export default App;
