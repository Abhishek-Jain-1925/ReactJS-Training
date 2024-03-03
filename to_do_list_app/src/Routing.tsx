import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoList from './TodoList';
import App from './App';

const Routing = () => {
    return(
        <div className="contents">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}></Route>
                    <Route path='/todo' element={<TodoList/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Routing;