import React from 'react'
import './Item.css'
class Item extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.index)
        this.state = {dateDue:this.props.item.dateDue, urgency_class:this.refreshColor()};
        this.refreshColor = this.refreshColor.bind(this)

    }
    refreshColor(dateDue=this.props.item.dateDue) {
        let hoursRemaining = this.datediff(new Date(), dateDue)
        if (hoursRemaining < 2){
            this.setState({urgency_class:"task-box red"})
        }
        else if (hoursRemaining < 24){
            this.setState({urgency_class:"task-box yellow"})
        }
        else {
            this.setState({urgency_class:"task-box green"})
        }
    }
   
    
    render() {
        return (
            <div className={this.state.urgency_class} onClick={(e) => { this.props.remove(this.props.index);}}>
                <h3>{this.props.item.text}</h3>
                <p>{this.props.item.dateDue.toString()}</p>

            </div>
        )
    }
    componentDidMount() {
        this.refreshColor()
        this.message = setInterval(() => {
            this.refreshColor()
        }, 600)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }
    datediff(first, second) {
        return Math.round((second-first)/(1000*60*60));
    }
}
export default Item