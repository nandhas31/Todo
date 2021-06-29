import React from 'react'
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, text: props.text, completed: props.completed, dateCreated: props.dateCreated, dateDue: props.dateDue, };
    }
    refreshColor() {
        //todo: implement time based color
    }
    render() {
        return (
            <div>
                <h3>{this.state.id}</h3>
            </div>
        );
    }
    componentDidMount() {
        this.refreshColor()
        this.message = setInterval(() => {
            this.refreshColor()
        }, 10000)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }
}
export default Item