import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoList from './TodoList';
import ErrorPage from './ErrorPage';
import AddTodo from './AddTodo';
import TodoDetails from './TodoDetails';

const Routing = () => {
    return(
        <div className="contents">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TodoList/>}></Route>
                    <Route path='/add/todo' element={<AddTodo/>}></Route>
                    <Route path="/todo/details/:id" element={<TodoDetails />} />

                    <Route path='*' element={<ErrorPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Routing;