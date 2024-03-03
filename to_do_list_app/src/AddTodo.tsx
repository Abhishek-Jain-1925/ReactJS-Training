import { useState } from "react";
import Dto from "./Dto";
import { useNavigate } from "react-router";

interface ITodoElement {
  id: number;
  task: string;
  isComplete: boolean;
}

const AddTodo = () => {
  const [todos, setTodos] = useState<Array<ITodoElement>>(Dto);
  const [str, setStr] = useState("");
  const navigate = useNavigate();

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

    const updatedDto = [...Dto, { ...todo, isComplete: false }];
    Dto.push({ ...todo, isComplete: false });
    console.log(updatedDto); 
    setStr("");
    navigate('/');
  };

  return (
    <div>
      In Add Todo
      <h1> ToDo App </h1>
      <input
        type="text"
        value={str}
        autoFocus
        onChange={(e) => handleInput(e.target.value)}
      />
      &nbsp;&nbsp;
      <button
        onClick={addTodo}
        disabled={!Boolean(str.length)}
        className="btn btn-secondary"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
