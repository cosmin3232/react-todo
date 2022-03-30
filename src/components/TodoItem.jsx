import Card from "./shared/Card";
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import TodoContext from "../context/TodoContext";

function TodoItem({item}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is some text');

    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev++;
    //     });
    // }

    const {deleteTodo, editTodo} = useContext(TodoContext);

    return (
        <Card>
            <div className="num-display">{item.date}</div>
            <button onClick={() => deleteTodo(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editTodo(item)} className="edit">
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default TodoItem