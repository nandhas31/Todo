import React from 'react';
import Item from './Item.js';
import './List.css'
import PopUpBox from './PopUpBox'
import Task from './Task'
//test item array

let itemarr = []

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: itemarr, popUpBox: false, refreshColor: true };

        // Binding this keyword
        this.remove = this.remove.bind(this)
        this.addPopUpBox = this.addPopUpBox.bind(this);
        this.child = React.createRef();
        this.add = this.add.bind(this);
    }
    addPopUpBox() {
        this.setState({ popUpBox: true });
    }
    removePopUpBox(e) {
        if (this.state.popUpBox && !e.target.closest('.inside')) {
            this.setState({ popUpBox: false });
        }
    }
    add(text, date, time){
        itemarr.push(new Task(text, new Date(date + " "+ time)))
        this.setState({popUpBox:false})
    }
    remove(index) {
        if (!this.state.popUpBox) {
            let arr = this.state.items
            arr.splice(index, 1)
            this.setState({ items: arr, refreshColor:!this.state.refreshColor })
        }

    }
    refreshList() {

        //implement db
    }
    render() {
        return (
            <div onClick={(e) => { this.removePopUpBox(e) }}>
                <div> {this.state.popUpBox ? <PopUpBox addFunction={this.add}/> : null} </div>
                <div className="add" onClick={this.addPopUpBox}>+</div>
                <div className="tasks-wrap">
                    {this.state.items.map((task, index) => {
                        return (
                            <Item index={index} refreshColor={this.state.refreshColor} ref={this.child} key={task.id} item={task} remove={this.remove}/>
                    )})}
                </div>


            </div>);
    }
    componentDidMount() {
        this.refreshList()
        this.message = setInterval(() => {
            this.refreshList()
        }, 10000)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }

}

export default List;


