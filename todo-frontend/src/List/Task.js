import { v4 as uuidv4 } from 'uuid';
class Task{
    constructor(task, date){
        this.id = uuidv4()
        this.text = task
        this.dateDue = date
        this.dateCreated = new Date()
        this.completed = false;

        this.setCompleted = function(){
            this.completed = true;
        }
    }
}

export default Task;