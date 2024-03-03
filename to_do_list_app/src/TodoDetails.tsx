import { useParams } from "react-router";
import Dto from "./Dto";
import { Link } from "react-router-dom";

interface ITodoElement {
  id: number;
  task: string;
  isComplete: boolean;
}

const TodoDetails = () => {
  const id: string = useParams<{ id: string }>().id || "";

  const getTodoById = (id: number): ITodoElement | undefined => {
    return Dto.find((todo) => todo.id === id);
  };

  const todo = getTodoById(parseInt(id));

  return (
    <center>
      <div>
        <h3>Details of Task are as follows -  </h3>
        <h4>
          ID : {id} <br/>
          Task : {todo?.task} <br/>
          Status : {todo?.isComplete === true ? "Completed":"Not Completed"}
        </h4>
      </div>
      <Link to={'/'}> <button className="btn btn-secondary">Back to Home</button> </Link>
    </center>
  );
};

export default TodoDetails;
