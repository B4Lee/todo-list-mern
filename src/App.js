import React, { useState, useEffect } from 'react';
import todos from './api';

import Form from './components/Form'
import Section from './components/Section'
import List from './components/List'

const appTitle = "To-Do App";

// const list = [
//   {id: 1, title: "tset #1", completed: false},
//   {id: 2, title: "tset #2", completed: false},
//   {id: 3, title: "tset #3", completed: false},
// ]

const App = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todo")
      setTodoList(data)
     
    }

    fetchData();
  }, [])

  const addTodo = async (item) => {
    const {data} = await todos.post("/todo", item)
    setTodoList((oldList) => [...oldList, data])
  }

  const removeTodo = async (id) => {
    await todos.delete(`/todo/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todo/${id}`, item)
  }

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section> 

      <Section>
        <Form addTodo={addTodo}/>
      </Section> 
      
      <Section>
        <List 
        editTodoListProp={editTodo}
        removeTodoListProp={removeTodo} 
        list={todoList}
        />
      </Section>
    </div>
  )
}

export default App