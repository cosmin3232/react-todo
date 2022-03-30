import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import TodoContext from "../context/TodoContext";
import Spinner from "./shared/Spinner";

function TodoList() {
    const {todo, isLoading} = useContext(TodoContext);

    if (!isLoading && (!todo || todo.length === 0)) {
        return (<p>No Todo Elements Yet</p>);
    }

    return isLoading ? (<Spinner />) : (
        <div className="feedback-container">
            <div className="feedback-list">
                <h1>TODOs elements</h1>
                <AnimatePresence>
                    {todo.map((item) => {
                        return item.status === 1 ? (<motion.div
                                key={item.id}
                                initial={{opacity: 0}}
                                animate ={{opacity: 1}}
                                exit={{opacity: 0}}
                                >
                                    <TodoItem key={item.id} item={item} />
                                </motion.div>) : '';
                    })}
                </AnimatePresence>
            </div>
            <div className="feedback-list">
                <h1>Done elements</h1>
                <AnimatePresence>
                    {todo.map((item) => {
                        return item.status === 0 ? (<motion.div
                                key={item.id}
                                initial={{opacity: 0}}
                                animate ={{opacity: 1}}
                                exit={{opacity: 0}}
                                >
                                    <TodoItem key={item.id} item={item} />
                                </motion.div>) : '';
                    })}
                </AnimatePresence>
            </div>
        </div>
    )

//   return (
//     <div className="feedback-list">
//         {feedback.map((item) => {
//             return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//         })}
//     </div>
//   )
}

export default TodoList