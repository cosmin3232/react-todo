import { createContext, useState, useEffect } from 'react';
import Toastr from '../components/shared/Toastr';
const TodoContext = createContext();

export const TodoService = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [todo, setTodo] = useState([]);
    const [todoEdit, setTodoEdit] = useState({
        item: {},
        edit: false,
    });
    const [toastr, setToastr] = useState({
        display: false,
        status: 'success',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('/todo');
        const data = await response.clone().json();
        setTodo(data);
        setIsLoading(false);
    }

    
    const addTodo = async (newTodo) => {
        const response = await fetch('/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });
        await response.json().then(
            (data) => {
                showToastr('success');
                setTodo([data, ...todo]);
            },
            (err) => {
                showToastr('error');
            }
        );
    }; 

    const deleteTodo = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/todo/${id}`, { method: 'DELETE' }).then(
                (data) => {
                    showToastr('success');
                    setTodo(todo.filter((item) => item.id !== id));
                },
                (err) => {
                    showToastr('error');
                }
            );
        }
    };

    const editTodo = (item) => {
        setTodoEdit({
            item,
            edit: true,
        });
    };

    const updateTodo = async (id, updatedItem) => {
        const response = await fetch(`/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        await response.json().then(
            (data) => {
                showToastr('success');
                setTodo(todo.map((item) => item.id === id ? { ...item, ...data} : item));
            },
            (err) => {
                showToastr('error');
            }
        );
    };

    const showToastr = async (status) => {
        setToastr({
            display: true,
            status
        });
        setTimeout(() => {
            setToastr({
                display: false,
            });
        }, 1500);
    }

    return <TodoContext.Provider value={{
        todo,
        todoEdit,
        isLoading,
        deleteTodo,
        addTodo,
        editTodo,
        updateTodo,
    }}>
        {children}
        <Toastr display={toastr.display} status={toastr.status}/>
    </TodoContext.Provider>
};

export default TodoContext;