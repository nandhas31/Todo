import React from 'react'
import './Item.css'
import PopUpBox from './PopUpBox'
let item1 = { id: "Example", text: "Example1", completed: false, dateCreated: new Date(), dateDue: new Date() }
let item2 = { id: "Example", text: "Example2", completed: false, dateCreated: new Date(), dateDue: new Date() }
let itemarr = []
itemarr.push(item1)
itemarr.push(item2)
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskList: itemarr, popUpBox: false };
        this.remove = this.remove.bind(this)
        this.addPopUpBox = this.addPopUpBox.bind(this);
    }
    refreshColor() {
        //todo: implement time based color
    }
    addPopUpBox() {
        this.setState({ popUpBox: true });
    }
    removePopUpBox(e) {
        if (this.state.popUpBox && e.target.className !== 'inside') { 
            this.setState({ popUpBox: false }); 
        }
    }
    remove(index) {
        if (!this.state.popUpBox){
            let arr = this.state.taskList
            arr.splice(index, 1)
            this.setState({ taskList: arr })
        }
        
    }
    render() {
        return (
            <div onClick={(e) => { this.removePopUpBox(e) }}>
                <div> {this.state.popUpBox ? <PopUpBox /> : null} </div>
                <div className="add" onClick={this.addPopUpBox}>+</div>
                <div className="tasks-wrap">
                    {this.state.taskList.map((task, index) => {
                        return (<div className="task-box" key={index} onClick={(e) => { this.remove(index) }}>
                            <h3>{task.text}</h3>
                            <p>{task.dateDue.toString()}</p>

                        </div>)
                    })}
                </div>


            </div>);
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