import React from 'react';
class WelcomeMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Nandha"};
        this.refreshMessage();
    }
    refreshMessage() {
        let date = new Date();
        if (date.getHours() < 12){
            this.setState({greeting: "Good Morning, "})
        }
        else if (date.getHours() < 18){
            this.setState({greeting: "Good Afternoon, "})
        }
        else {
            this.setState({greeting: "Good Evening, "})
        }
    }
    render() {
        return (
            <div className="title">
                <h1>{this.state.greeting}{this.state.name}</h1>
            </div>
        );
    }
    componentDidMount() {
        this.refreshMessage()
        this.message = setInterval(() =>{
            this.refreshMessage()
        }, 100000)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }
    
}

export default WelcomeMessage;