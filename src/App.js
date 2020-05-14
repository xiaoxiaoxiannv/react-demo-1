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
       let result = []
        for(let i=0;i<this.state.array.length;i++){
            result.push(this.state.array[i])
        }
        return result
    }
}

export default App;
