import React from 'react';
import Item from './Item.js';
//test item array

let item1 = {id: "Example", text: "Example", completed: false, dateCreated: new Date(), dateDue: new Date() }
let item2 = {id: "Example", text: "Example", completed: false, dateCreated: new Date(), dateDue: new Date() }
let itemarr = []
itemarr.push(item1)
itemarr.push(item2)
let i = itemarr.map((value) =>{
    return <Item id={value.id} text={value.text} completed={value.completed} dateCreated={value.dateCreated} dateDue={value.dateDue}/>
})

class List extends React.Component {
    constructor(props) {
        super(props);

    }
    refreshList() {
        //implement db
    }
    render() {
        return (
            <div>
               {i}
            </div>
        );
    }
    componentDidMount() {
        this.refreshList()
        this.message = setInterval(() =>{
            this.refreshList()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.message)
    }
    
}

export default List;