import React from 'react';

class App extends React.PureComponent {
    divRef = undefined
    constructor(props) {
        super(props);
        this.state = {
            n: 1,
            width:undefined
        };
        this.divRef = React.createRef()
    }

    onClick = () => {
        this.setState(state => ({n: state.n + 1}))
    }
    componentDidMount() {
        const div=this.divRef.current
        console.log(div);
        const {width} =div.getBoundingClientRect()
        this.setState({width})
    }

    render() {
        return(
            <div ref={this.divRef}>Hello World,{this.state.width}px</div>
        )
    }
}

export default App;
