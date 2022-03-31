import { useState, useContext, useEffect } from 'react';
import StatusSelect from './StatusSelect';
import Button from './shared/Button';
import Card from "./shared/Card";
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(1);
  const {addTodo, todoEdit, updateTodo} = useContext(TodoContext);

  useEffect(() => {
    if (todoEdit.edit === true) {
      setBtnDisabled(false);
      setText(todoEdit.item.text);
      setStatus(todoEdit.item.status);
      setDate(todoEdit.item.date);
    }
  }, [todoEdit]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        status,
        date
      };

      if (todoEdit.edit === true) {
        updateTodo(todoEdit.item.id, newFeedback);
      } else {
        addTodo(newFeedback)
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add todo element</h2>
        <StatusSelect select={(status) => setStatus(status)}/>
        <div className="">
          <input onChange={handleTextChange} type="text" value={text} placeholder="Write a description"/>
          <input onChange={handleDateChange} type="date" value={date} lang="ro-RO" placeholder="Choose the date"/>
        </div>
        <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Send
        </Button>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default TodoForm