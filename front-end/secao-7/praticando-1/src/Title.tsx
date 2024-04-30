import React from "react";

type StateType = {
    number: number,
}

class Title extends React.Component<object, StateType> {
    state = {
        number: 0,
    };

    generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

    componentDidMount() {
        const newNumber = this.generateRandomNumber();
        this.setState({ number: newNumber });
    }

    componentDidUpdate() {
        document.title = `Número ${this.state.number}`;
    }

    componentWillUnmount() {
        document.title = 'Número oculto'
    }

    render() {
        const { number } = this.state;
       return (
        <>
            <h1>{ number }</h1>
            <button onClick={ () => this.setState({number: this.generateRandomNumber()}) }>generate</button>
        </>
       );

    }
}

export default Title;
