import { createContext, useState, useEffect } from 'react';
const TodoContext = createContext();

export const TodoService = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [todo, setTodo] = useState([]);
    const [todoEdit, setTodoEdit] = useState({
        item: {},
        edit: false,
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
        const data = await response.json();
        setTodo([data, ...todo]);
    }; 

    const deleteTodo = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/todo/${id}`, { method: 'DELETE' });
            setTodo(todo.filter((item) => item.id !== id));
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

        const data = await response.json();
        setTodo(todo.map((item) => item.id === id ? { ...item, ...data} : item));
    };

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
    </TodoContext.Provider>
};

export default TodoContext;