import React from 'react';
import './PopUpBox.css'
class PopUpBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {addFunction:this.props.addFunction, task:"", date:"", time:""}
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <div className="inside">
                <div >Pop Up Box! </div>
                <div>
                    <form>
                        <h5>Task</h5>
                        <input class="task" type="text" value={this.state.task} onChange={this.handleChange}/>
                        <h5>Date</h5>
                        <input class="date" type="date" value={this.state.date} onChange={this.handleChange}/>
                        <h5>Time</h5>
                        <input class="time" type="time" value={this.state.time} onChange={this.handleChange}/>
                        <input type="button" value="Add" onClick={(e) => { this.state.addFunction(this.state.task, this.state.date, this.state.time)}}/>
                    </form>
                </div>
            </div>
        );
    }
    handleChange(event){
        if(event.target.className == "task")
            this.setState({task:event.target.value})
        if(event.target.className == "date")
            this.setState({date:event.target.value})
        if(event.target.className == "time")
            this.setState({time:event.target.value})
    }
}

export default PopUpBox