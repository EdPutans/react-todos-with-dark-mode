import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function getNewId(todosArray) {
  return todosArray[todosArray.length - 1].id + 1
}

const initialTodos = [{
  id: 1,
  text: 'Learn React',
},
{
  id: 2,
  text: 'Pass down all the props I need',
},
{
  id: 3,
  text: 'Make dark mode work',
},
{
  id: 4,
  text: 'Shut up',
}
]


function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [isDarkMode, setIsDarkMode] = useState(false)

  const addTodo = (text) => {
    const newTodosArray = [...todos];

    newTodosArray.push({ text, id: getNewId(todos) });
    setTodos(newTodosArray);
  };
  const backgroundColor = isDarkMode ? '#333' : '#eee'


  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <Header text="Todo list!" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <TodoList todos={todos} isDarkMode={isDarkMode} />
      <TodoForm addTodo={addTodo} isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
