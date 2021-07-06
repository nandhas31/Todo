import React from 'react';
import Item from './Item.js';
import './List.css'
import PopUpBox from './PopUpBox'
//test item array

let item1 = { id: "Example", text: "Example", completed: false, dateCreated: new Date(), dateDue: new Date("7/8/21") }
let item2 = { id: "Example1", text: "Example2", completed: false, dateCreated: new Date(), dateDue: new Date("7/5/21") }
let itemarr = []
itemarr.push(item1)
itemarr.push(item2)

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: itemarr, popUpBox: false, refreshColor: true };

        // Binding this keyword
        this.remove = this.remove.bind(this)
        this.addPopUpBox = this.addPopUpBox.bind(this);
        this.child = React.createRef();
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
        console.log(index)
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
                <div> {this.state.popUpBox ? <PopUpBox /> : null} </div>
                <div className="add" onClick={this.addPopUpBox}>+</div>
                <div className="tasks-wrap">
                    {this.state.items.map((task, index) => {
                        return (
                            <Item index={index} refreshColor={this.state.refreshColor} ref={this.child} key={index} item={task} remove={this.remove}/>
                    )})}
                </div>


            </div>);
    }
    componentDidMount() {
        this.refreshList()
        this.message = setInterval(() => {
            this.refreshList()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }

}

export default List;