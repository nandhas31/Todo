import React from 'react';
import Item from './Item.js';
import './Item.css'
//test item array

let item1 = { id: "Example", text: "Example", completed: false, dateCreated: new Date(), dateDue: new Date() }
let item2 = { id: "Example", text: "Example", completed: false, dateCreated: new Date(), dateDue: new Date() }
let itemarr = []
itemarr.push(item1)
itemarr.push(item2)

//

let i = itemarr.map((value) => {
    return <Item id={value.id} text={value.text} completed={value.completed} dateCreated={value.dateCreated} dateDue={value.dateDue} />
})

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ items: i })

        // Binding this keyword
        this.removeElement = this.removeElement.bind(this)

    }
    removeElement() {
        if (this.state.items.length > 1) {
            this.setState({ items: this.state.items.pop() })
        }
        else {
            this.setState({ items: [] })
        }
        console.log(this.state.items.length)
    }
    refreshList() {

        //implement db
    }
    render() {
        return (
            <div className="tasks-wrap">
                {this.state.taskList.map((task, index)=>{
                    return (<div className="task-box" key={index} onClick={this.removeElement}>
                    {this.state.items}
                </div>)
                })}
            </div>

        );
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