import { useState } from "react";
import Dto from "./Dto";
import { Link, useNavigate } from "react-router-dom";

interface ITodoElement {
  id: number;
  task: string;
  isComplete: boolean;
}
const TodoList = () => {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState<Array<ITodoElement>>(Dto);
  const navigate = useNavigate();

  const handleStatus = (item: ITodoElement) => {
    setChecked(!checked);
    item.isComplete = !item.isComplete;
  };

  const deleteItemByKey = (array: ITodoElement[], key: keyof ITodoElement, value: number | string | boolean) => {
    const index = array.findIndex(item => item[key] === value);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  };

  const handleCard = (item: ITodoElement)=>{
    navigate(`/todo/details/${item.id}`)
  }

  const handleDelete = (item: ITodoElement) => {
    // if (confirm("Are you sure you want to delete this Task?")) {
    //   setTodos(todos.filter((value) => item.id !== value.id));
    // }
    setTodos(todos.filter((value) => item.id !== value.id));
    deleteItemByKey(Dto,"id",item.id);

  };

  return (
    <div className="contents">
      <center>
        <h1> ToDo App </h1>
        {/* <input type="text" value={str}  autoFocus onChange={(e) => handleInput(e.target.value)} />
        &nbsp;&nbsp; */}
        <Link to={"/add/todo"}>
          <button className="btn btn-secondary">Add New Item</button>
        </Link>
        {todos.map((item) => (
          <div
            className="card w-50"
            key={item.id}
            style={{ border: "0.1px solid grey", margin: "10px", cursor:"pointer"}}
          >
            <div
              className="card-header"
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}
              onClick={() => handleCard(item)}
            >
              <h5>
                <input
                  type="checkbox"
                  name={item.task}
                  checked={item.isComplete}
                  onChange={() => handleStatus(item)}
                />{" "}
                &nbsp;&nbsp;
                {item.task}
              </h5>
            </div>

            <div className="card-body">
              <p className="card-text">
                <strong>Status :</strong>{" "}
                {item.isComplete ? "Completed" : "Incomplete"}&nbsp;&nbsp;
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </p>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default TodoList;
