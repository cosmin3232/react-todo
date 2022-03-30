import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoStats() {
    const {todo} = useContext(TodoContext);
    let todoElements = 0;
    let doneElements = 0;
    todo.map((item) => item.status === 1 ? todoElements++ : doneElements++);

    return (
        <div className="feedback-stats">
            <h4>{todoElements} Todo Element{todoElements > 1 ? 's' : ''}</h4>
            <h4>{doneElements} Done Element{doneElements > 1 ? 's' : ''}</h4>
        </div>
    )
}

export default TodoStats