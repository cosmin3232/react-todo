import { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/TodoContext';

function StatusSelect({select}) {
    const [selected, setSelected] = useState(1);
    const {todoEdit} = useContext(TodoContext);

    useEffect(() => {
        setSelected(todoEdit.item.status);
    }, [todoEdit]);

    const handleChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value);
    };

    return (
        <div>
            <select name="status" onChange={handleChange} value={selected}>
                <option value="1">To do</option>
                <option value="0">Done</option>
            </select>
        </div>
    )
}

export default StatusSelect