import Header from "./components/Header";
import Card from './components/shared/Card';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import TodoForm from './components/TodoForm';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { TodoService } from './context/TodoContext';

function App() {
    return (
        <TodoService>
            <Router>
                <Header text="This is a custom component." />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <TodoForm />
                                <TodoStats />
                                <TodoList />  
                            </>
                        }>
                        </Route>
                    
                        <Route path='about' element={<AboutPage />}/>
                        {/* <Route path='/post/:id/:name' element={<Post/>}/> */}
                        <Route path='/post/*' element={<Post/>}/>
                    </Routes>

                    <Card>
                        <NavLink to ='/' activeclassname='active'>
                            Home
                        </NavLink>
                        <NavLink to ='/about' activeclassname='active'>
                            About
                        </NavLink>
                    </Card>
                    <AboutIconLink />
                </div>
            </Router>
        </TodoService>
    )
}

export default App;

// function App() {
//     const title = 'Blog Post';
//     const body = 'This is body';
//     const comments = [
//         {id: 1, text: 'Comment 1'},
//         {id: 2, text: 'Comment 2'},
//         {id: 3, text: 'Comment 3'},
//     ];

//     const loading = false;
//     const showComments = false;

//     if (loading) return <h1>Loading...</h1>;

//     return (
//         <div className='container'>
//             <h1>
//                 Hello from the app component
//             </h1>
//             <h1>{title}</h1>
//             <p>{body}</p>

//             {showComments && (
//                 <div className="comments">
//                     <h3>Comments ({comments.length})</h3>
//                     <ul>
//                         {comments.map((comment, index) => {
//                             <li key={index}>{comment.text}</li>
//                         })}
//                     </ul>
//                 </div>
//             )}

//         </div>
//     )
// }