import React,{useState, useEffect} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = ()=>{
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos");
    console.log({localStorage});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[]);

  const addTodos = async todo =>(
    setTodos([...todos,todo])
  )

  //Adding up things in local Storage
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const markComplete = id=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }



    return(
      <Container fluid>
        {/* ToDo With Local Storage */}
        <h1>Let's Plan The Day</h1>
        <Todos todos={todos} markComplete={markComplete}/>
        <TodoForm addTodos = {addTodos}/>
      </Container>
    )
}

export default App;

