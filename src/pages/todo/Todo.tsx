/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import "./Todo.css";
import { useEffect, useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState<Array<any>>([]);

  const handleCallApi = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    const data = res.data.filter((item: any) => item.id <= 10);

    setTodo(data);
  };

  useEffect(() => {
    handleCallApi();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {todo?.map((item, index) => {
        return (
          <div className="card-todo" key={index * Math.random()}>
            <p>userId: {item.userId}</p>
            <p>id: {item.id}</p>
            <p>title:{item.title} </p>
            <p>
              completed: {item.completed ? "hoàn thành" : " chưa hoàn thành"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
