import { useState } from "react";
import {useFetch} from "./components/useFetch";

const TODO_DUMMY_LIST = [
  {
    id: 1,
    task: "Build To-Do App",
    isComplete: false,
  },
  {
    id: 2,
    task: "Deploy Project",
    isComplete: false,
  },
  {
    id: 3,
    task: "Assignment on LMS",
    isComplete: true,
  },
];

interface ITodoElement {
  id: number;
  task: string;
  isComplete: boolean;
}
const TodoList = () => {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState<Array<ITodoElement>>(TODO_DUMMY_LIST);
  const [str, setStr] = useState("");

  const handleStatus = (item: ITodoElement) => {
    setChecked(!checked);
    item.isComplete = !item.isComplete;
  };

  const handleInput = (str: string) => {
    setStr(str);
  };

  const addTodo = () => {
    const todo = {
      id: Math.random() * 2000,
      task: str,
      isComplete: false,
    };
    setTodos([...todos, todo]);
    setStr("");
  };

  const handleDelete = (item: ITodoElement) => {
    // if (confirm("Are you sure you want to delete this Task?")) {
    //   setTodos(todos.filter((value) => item.id !== value.id));
    // }
    setTodos(todos.filter((value) => item.id !== value.id));

  };

  return (
    <div className="contents">
      <center>
        <h1> ToDo App </h1>
        <input type="text" value={str}  autoFocus onChange={(e) => handleInput(e.target.value)} />
        &nbsp;&nbsp;
        <button onClick={addTodo} disabled={!Boolean(str.length)} className="btn btn-secondary">
          Add
        </button>
        {todos.map((item) => (
          <div className="card w-50" key={item.id}
            style={{ border: "0.1px solid grey", margin: "10px" }} >
            <div className="card-header" style={{textDecoration: item.isComplete ? "line-through":"none"}}>
              <h5>
                <input type="checkbox" name={item.task} checked={item.isComplete}
                  onChange={() => handleStatus(item)}
                /> &nbsp;&nbsp;
                {item.task}
              </h5>
            </div>

            <div className="card-body">
              <p className="card-text">
                <strong>Status :</strong>{" "}
                {item.isComplete ? "Completed" : "Incomplete"}&nbsp;&nbsp;
                <button className="btn btn-secondary" onClick={() => handleDelete(item)} >
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
